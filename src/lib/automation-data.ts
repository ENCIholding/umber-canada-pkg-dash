import {
  flooringProjects,
  flooringPurchaseOrders,
  flooringReceiving,
  flooringShipments,
  flooringStakeholders,
  getDocumentsForProject,
  getInstallPhasesForProject,
  getProjectById,
  getRoomAreasForProject
} from "@/lib/flooring-data";

export type AutomationSignal = {
  id: string;
  type: "exception" | "approval" | "follow-up" | "schedule";
  title: string;
  owner: string;
  urgency: "high" | "medium" | "low";
  project: string;
  nextAction: string;
  downstreamImpact: string;
  trigger: string;
  module: string;
};

export type AutomationRule = {
  id: string;
  name: string;
  cadence: string;
  scope: string;
  effect: string;
};

function buildSignals(): AutomationSignal[] {
  const shipmentSignals = flooringShipments
    .filter((shipment) => shipment.risk)
    .map((shipment) => {
      const linkedOrder = flooringPurchaseOrders.find((order) => order.id === shipment.poId);
      const project = flooringProjects.find((entry) => entry.id === linkedOrder?.projectId) ?? flooringProjects[0];
      return {
        id: `signal-${shipment.id}`,
        type: "exception" as const,
        title: `${shipment.loadNumber} needs release coordination`,
        owner: "Logistics",
        urgency: shipment.status === "delayed" ? "high" as const : "medium" as const,
        project: project.name,
        nextAction: shipment.risk,
        downstreamImpact: "If access or release slips, staged labor and install windows start burning immediately.",
        trigger: "Shipment risk text present or ETA status changes to delayed/watch",
        module: "Shipments"
      };
    });

  const receivingSignals = flooringReceiving
    .filter((entry) => entry.condition !== "clear")
    .map((entry) => ({
      id: `signal-${entry.id}`,
      type: "exception" as const,
      title: `${entry.warehouse} variance review`,
      owner: "Warehouse",
      urgency: entry.condition === "hold" ? "high" as const : "medium" as const,
      project: "Cross-project",
      nextAction: entry.variance,
      downstreamImpact: "Shortages and damage holds must be surfaced before installers or customer deliveries are booked blind.",
      trigger: "Receiving condition is hold or damage-check",
      module: "Receiving"
    }));

  const approvalSignals = flooringProjects
    .filter((project) => project.installReadiness !== "ready")
    .map((project) => {
      const missingDocument = getDocumentsForProject(project.id).find((document) => document.status === "missing");
      return {
        id: `signal-approval-${project.id}`,
        type: "approval" as const,
        title: `${project.name} release gate still open`,
        owner: "Project coordination",
        urgency: project.installReadiness === "blocked" ? "high" as const : "medium" as const,
        project: project.name,
        nextAction: missingDocument?.action ?? project.nextAction,
        downstreamImpact: "Without release confidence, deliveries, crews, and billing sequences compress and become reactive.",
        trigger: "Project install readiness is not ready or required document is missing",
        module: "Projects"
      };
    });

  const followUpSignals = flooringStakeholders
    .filter((stakeholder) => stakeholder.status !== "active")
    .map((stakeholder) => ({
      id: `signal-follow-${stakeholder.id}`,
      type: "follow-up" as const,
      title: `${stakeholder.name} follow-up`,
      owner: stakeholder.organization,
      urgency: stakeholder.status === "needs-followup" ? "high" as const : "medium" as const,
      project: getProjectById(stakeholder.projectId)?.name ?? "Cross-project",
      nextAction: stakeholder.nextTouch,
      downstreamImpact: "Open loops around approvals, specs, or sign-offs quickly become install-day blockers.",
      trigger: "Stakeholder status is waiting or needs-followup",
      module: "Stakeholders"
    }));

  const scheduleSignals: AutomationSignal[] = [
    {
      id: "signal-schedule-1",
      type: "schedule",
      title: "Daily install readiness digest",
      owner: "Ops Center",
      urgency: "low",
      project: "Cross-project",
      nextAction: "Send a 7 AM summary of blocked rooms, missing docs, and shipment risks.",
      downstreamImpact: "Keeps project, logistics, and finance leads aligned on what can actually move today.",
      trigger: "Every weekday morning",
      module: "Automation"
    },
    {
      id: "signal-schedule-2",
      type: "schedule",
      title: "Afternoon attachment chase",
      owner: "Email Center",
      urgency: "low",
      project: "Cross-project",
      nextAction: "Bundle missing site-readiness or billing docs and queue follow-up emails at 3 PM.",
      downstreamImpact: "Turns missing attachments into a visible queue instead of hidden back-office drift.",
      trigger: "Every weekday afternoon",
      module: "Email / File Center"
    }
  ];

  return [...shipmentSignals, ...receivingSignals, ...approvalSignals, ...followUpSignals, ...scheduleSignals];
}

export function getAutomationSignals() {
  return buildSignals();
}

export function getAutomationRules(): AutomationRule[] {
  return [
    {
      id: "rule-1",
      name: "Release gate monitor",
      cadence: "event-driven",
      scope: "Projects + File Center + Email",
      effect: "When required site-readiness docs are missing, create approval tasks and draft the follow-up email."
    },
    {
      id: "rule-2",
      name: "Receiving variance escalation",
      cadence: "event-driven",
      scope: "Receiving + Procurement + Projects",
      effect: "When shortages or damage are logged, notify procurement, flag affected rooms, and keep delivery from auto-advancing."
    },
    {
      id: "rule-3",
      name: "Room readiness pulse",
      cadence: "daily 07:00",
      scope: "Projects + Gantt + Ops Center",
      effect: "Scan room prep status, blocked install phases, and upcoming drops to produce the day’s install command list."
    },
    {
      id: "rule-4",
      name: "Billing package nudge",
      cadence: "daily 12:00",
      scope: "Finance + File Center + Email",
      effect: "Watch projects nearing completion and queue AP follow-ups once billing attachments are ready."
    }
  ];
}

export function getAutomationCoverageSummary() {
  const projectsWithBlockedRooms = flooringProjects.filter((project) =>
    getRoomAreasForProject(project.id).some((room) => room.prepStatus !== "ready")
  ).length;
  const blockedPhases = flooringProjects.filter((project) =>
    getInstallPhasesForProject(project.id).some((phase) => phase.status === "blocked")
  ).length;
  const missingDocuments = flooringProjects.reduce(
    (total, project) => total + getDocumentsForProject(project.id).filter((document) => document.status === "missing").length,
    0
  );

  return {
    blockedRooms: projectsWithBlockedRooms,
    blockedPhases,
    missingDocuments
  };
}
