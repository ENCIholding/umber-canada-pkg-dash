import { flooringProjects } from "@/lib/flooring-data";

export type ProjectsFormValues = {
  id?: string;
  name: string;
  status?: string;
  code?: string;
  builder?: string;
  site?: string;
  city?: string;
  stage?: string;
  squareFeet?: number;
  marginPercent?: number;
  installWindow?: string;
  crew?: string;
  nextAction?: string;
};

export async function getProjectsList() {
  return flooringProjects.map((project) => ({
    id: project.id,
    name: project.name,
    status: project.status,
    code: project.code,
    builder: project.builder,
    site: project.site,
    city: project.city,
    stage: project.stage,
    squareFeet: project.squareFeet,
    marginPercent: project.marginPercent,
    installWindow: project.installWindow,
    crew: project.crew,
    nextAction: project.nextAction
  }));
}

export async function getProjectsById(id: string) {
  const project = flooringProjects.find((entry) => entry.id === id);
  if (!project) {
    return null;
  }

  return {
    id: project.id,
    name: project.name,
    status: project.status,
    code: project.code,
    builder: project.builder,
    site: project.site,
    city: project.city,
    stage: project.stage,
    squareFeet: project.squareFeet,
    marginPercent: project.marginPercent,
    installWindow: project.installWindow,
    crew: project.crew,
    nextAction: project.nextAction
  };
}

export const getprojectsById = getProjectsById;











