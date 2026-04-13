export type EmailFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: EmailFormValues[] = [
  { id: "1", name: "Sample Email 1", status: "active" },
  { id: "2", name: "Sample Email 2", status: "draft" }
];

export async function getEmailList() {
  return MOCK;
}

export async function getEmailById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}







