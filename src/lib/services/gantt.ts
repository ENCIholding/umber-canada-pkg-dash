import { flooringProjects, getInstallPhasesForProject } from "@/lib/flooring-data";

export type GanttFormValues = {
  id?: string;
  name: string;
  status?: string;
  projectCode?: string;
  owner?: string;
  start?: string;
  end?: string;
  dependency?: string;
};

export async function getGanttList() {
  return flooringProjects.flatMap((project) =>
    getInstallPhasesForProject(project.id).map((phase) => ({
      id: phase.id,
      name: `${project.name} - ${phase.label}`,
      status: phase.status,
      projectCode: project.code,
      owner: phase.owner,
      start: phase.start,
      end: phase.end,
      dependency: phase.dependency
    }))
  );
}

export async function getGanttById(id: string) {
  return (await getGanttList()).find((entry) => entry.id === id) ?? null;
}

export const getganttById = getGanttById;
