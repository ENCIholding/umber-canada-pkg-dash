export type AdvisorsFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: AdvisorsFormValues[] = [
  { id: "1", name: "Sample Advisors 1", status: "active" },
  { id: "2", name: "Sample Advisors 2", status: "draft" }
];

export async function getAdvisorsList() {
  return MOCK;
}

export async function getAdvisorsById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







