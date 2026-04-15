import { flooringProjects, flooringShipments, flooringStakeholders } from "@/lib/flooring-data";

export type ReportsRecord = {
  id: string;
  reportName: string;
  category?: string;
  scope?: string;
  format?: string;
  status?: string;
  owner?: string;
  notes?: string;
};

export async function getReportsList() {
  return [
    {
      id: "report-1",
      reportName: "Install readiness board",
      category: "Operations",
      scope: `${flooringProjects.length} active projects`,
      format: "screen / pdf",
      status: "live",
      owner: "Operations lead",
      notes: "Highlights jobs missing access, material, or crew release"
    },
    {
      id: "report-2",
      reportName: "Shipment risk digest",
      category: "Logistics",
      scope: `${flooringShipments.length} tracked loads`,
      format: "email",
      status: "live",
      owner: "Logistics coordinator",
      notes: "Summarizes ETAs, delayed drops, and release blockers"
    },
    {
      id: "report-3",
      reportName: "Stakeholder follow-up register",
      category: "CRM",
      scope: `${flooringStakeholders.length} critical contacts`,
      format: "sheet / email",
      status: "live",
      owner: "Project admin",
      notes: "Surfaces architect, superintendent, and builder follow-ups"
    }
  ];
}

export async function getReportsById(id: string) {
  return (await getReportsList()).find(x => x.id === id) ?? null;
}











