export type calendarFormValues = {
  id?: string;
  name: string;
  status?: string;
};

const MOCK: calendarFormValues[] = [
  { id: "1", name: "Sample Calendar 1", status: "active" },
  { id: "2", name: "Sample Calendar 2", status: "draft" }
];

export async function getcalendarList() {
  return MOCK;
}

export async function getcalendarById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}