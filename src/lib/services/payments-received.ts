import { flooringProjects } from "@/lib/flooring-data";

export type PaymentsReceivedRecord = {
  id: string;
  receiptNumber: string;
  payerName: string;
  projectName: string;
  category?: string;
  status?: string;
  receivedDate?: string;
  amount?: string;
  method?: string;
  referenceNumber?: string;
  notes?: string;
  createdAt?: string;
};

export async function getPaymentsReceivedList() {
  return flooringProjects.map((project, index) => ({
    id: `pay-in-${project.id}`,
    receiptNumber: `PR-${5200 + index + 1}`,
    payerName: project.builder,
    projectName: project.name,
    category: index % 2 === 0 ? "Progress draw" : "Material deposit",
    status: project.status === "billing" ? "due for invoicing" : "received",
    receivedDate: `2026-04-${11 + index}`,
    amount: String(Math.round(project.squareFeet * 4.2)),
    method: "EFT",
    referenceNumber: `UMB-AR-${4100 + index}`,
    notes: `Job draw tied to ${project.stage.toLowerCase()}`,
    createdAt: `2026-04-${11 + index}`
  }));
}

export async function getPaymentsReceivedById(id: string) {
  return (await getPaymentsReceivedList()).find((x) => x.id === id) ?? null;
}

export async function createPaymentsReceived(payload: Omit<PaymentsReceivedRecord, 'id' | 'createdAt'>) {
  return {
    id: String((await getPaymentsReceivedList()).length + 1),
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function updatePaymentsReceived(id: string, payload: Partial<PaymentsReceivedRecord>) {
  return { id, ...payload };
}

export async function deletePaymentsReceived(id: string) {
  return { success: true, id };
}











