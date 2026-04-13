export type GanttFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: GanttFormValues[] = [
  { id: "1", name: "Sample Gantt 1", status: "active" },
  { id: "2", name: "Sample Gantt 2", status: "draft" }
];

export async function getGanttList() {
  return MOCK;
}

export async function getGanttById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







