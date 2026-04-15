import { flooringPartners, flooringProjects, flooringPurchaseOrders } from "@/lib/flooring-data";

export type PaymentsSentRecord = {
  id: string;
  paymentNumber: string;
  payeeName: string;
  projectName: string;
  category?: string;
  status?: string;
  paymentDate?: string;
  amount?: string;
  method?: string;
  referenceNumber?: string;
  notes?: string;
  createdAt?: string;
};

export async function getPaymentsSentList() {
  return flooringPurchaseOrders.map((po, index) => ({
    id: `pay-sent-${po.id}`,
    paymentNumber: `PS-${2400 + index + 1}`,
    payeeName: flooringPartners.find((partner) => partner.id === po.partnerId)?.name ?? "Unknown payee",
    projectName: flooringProjects.find((project) => project.id === po.projectId)?.name ?? "Unknown project",
    category: po.category,
    status: po.status === "received" ? "paid" : po.status === "partial" ? "partially paid" : "scheduled",
    paymentDate: po.orderDate,
    amount: String(Math.round(po.amount * 0.45)),
    method: index % 2 === 0 ? "EFT" : "Cheque",
    referenceNumber: `UMB-EFT-${8800 + index}`,
    notes: `Supplier release for ${po.material}`,
    createdAt: po.orderDate
  }));
}

export async function getPaymentsSentById(id: string) {
  return (await getPaymentsSentList()).find((x) => x.id === id) ?? null;
}

export async function createPaymentsSent(payload: Omit<PaymentsSentRecord, 'id' | 'createdAt'>) {
  return {
    id: String((await getPaymentsSentList()).length + 1),
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function updatePaymentsSent(id: string, payload: Partial<PaymentsSentRecord>) {
  return { id, ...payload };
}

export async function deletePaymentsSent(id: string) {
  return { success: true, id };
}











