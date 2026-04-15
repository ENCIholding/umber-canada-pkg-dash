import { flooringStakeholders, getProjectById } from "@/lib/flooring-data";

export async function getStakeholdersList() {
  return flooringStakeholders.map((stakeholder) => ({
    id: stakeholder.id,
    name: stakeholder.name,
    role: stakeholder.role,
    organization: stakeholder.organization,
    status: stakeholder.status,
    projectName: getProjectById(stakeholder.projectId)?.name ?? "Unknown project",
    nextTouch: stakeholder.nextTouch
  }));
}

export async function getStakeholdersById(id: string) {
  return (await getStakeholdersList()).find((entry) => entry.id === id) ?? null;
}











