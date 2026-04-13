export type ProjectsFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: ProjectsFormValues[] = [
  { id: "1", name: "Sample Projects 1", status: "active" },
  { id: "2", name: "Sample Projects 2", status: "draft" }
];

export async function getProjectsList() {
  return MOCK;
}

export async function getProjectsById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







