export type AutomationSignal = {
  id: string;
  type: "exception" | "approval" | "follow-up" | "schedule";
  title: string;
  owner: string;
  urgency: "high" | "medium" | "low";
  project: string;
  nextAction: string;
  downstreamImpact: string;
};

export const automationSignals: AutomationSignal[] = [
  {
    id: "auto-1",
    type: "exception",
    title: "Riverfront elevator booking still unconfirmed",
    owner: "Project coordination",
    urgency: "high",
    project: "Riverfront Tower Lobby",
    nextAction: "Escalate to site superintendent and lock the access window before tile drop",
    downstreamImpact: "Missed access pushes install start and burns booked labor time"
  },
  {
    id: "auto-2",
    type: "approval",
    title: "Aspen Estates release gate waiting on painter deficiency closeout",
    owner: "Builder contact",
    urgency: "medium",
    project: "Aspen Estates Showhome",
    nextAction: "Request sign-off photo and auto-release delivery once approved",
    downstreamImpact: "Without release, warehouse stock sits and the install window compresses"
  },
  {
    id: "auto-3",
    type: "follow-up",
    title: "Parkland Phase 2 progress billing follow-up due",
    owner: "Finance",
    urgency: "medium",
    project: "Parkland Multi-Family Phase 2",
    nextAction: "Send billing package and nudge client AP at noon",
    downstreamImpact: "Delayed collection increases April cash exposure against inbound supply commitments"
  },
  {
    id: "auto-4",
    type: "schedule",
    title: "Daily receiving variance digest",
    owner: "Ops Center",
    urgency: "low",
    project: "Cross-project",
    nextAction: "Run at 3 PM and notify procurement + warehouse with shortages and damage holds",
    downstreamImpact: "Catches short shipments before they become install-day surprises"
  }
];
