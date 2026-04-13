export type PipelineFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: PipelineFormValues[] = [
  { id: "1", name: "Sample Pipeline 1", status: "active" },
  { id: "2", name: "Sample Pipeline 2", status: "draft" }
];

export async function getPipelineList() {
  return MOCK;
}

export async function getPipelineById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







