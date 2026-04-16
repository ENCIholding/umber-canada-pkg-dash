export type AdvisorsFormValues = {
  id?: string;
  name: string;
  company?: string;
  role?: string;
  status?: string;
  phone?: string;
  email?: string;
  notes?: string;
  rating?: string;
};

const MOCK: AdvisorsFormValues[] = [
  {
    id: "advisor-1",
    name: "Amrit Sandhu",
    company: "Prairie Tax & Advisory",
    role: "Accountant",
    status: "active",
    phone: "+17805550101",
    email: "amrit@prairietax.ca",
    rating: "preferred",
    notes: "Handles GST remittances, year-end prep, and builder holdback accounting."
  },
  {
    id: "advisor-2",
    name: "Nina Grewal",
    company: "Grewal Legal",
    role: "Lawyer",
    status: "active",
    phone: "+17805550102",
    email: "nina@grewallegal.ca",
    rating: "trusted",
    notes: "Reviews supply agreements, collection escalations, and lease language."
  },
  {
    id: "advisor-3",
    name: "Colin Mercer",
    company: "Mercer Realty Advisory",
    role: "Realtor",
    status: "watch",
    phone: "+17805550103",
    email: "colin@merceraadvisory.ca",
    rating: "secondary",
    notes: "Useful for warehouse options and landlord negotiations when space expands."
  }
];

export async function getAdvisorsList() {
  return MOCK;
}

export async function getAdvisorsById(id: string) {
  return MOCK.find((entry) => entry.id === id) ?? null;
}

export const getadvisorsById = getAdvisorsById;
