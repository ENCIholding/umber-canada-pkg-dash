import {
  flooringPurchaseOrders,
  getPartnerById,
  getProjectById
} from "@/lib/flooring-data";

export type ProcurementRecord = {
  id: string;
  poNumber: string;
  vendorName: string;
  projectName: string;
  status?: string;
  orderDate?: string;
  expectedDate?: string;
  totalAmount?: string;
  notes?: string;
  createdAt?: string;
};

export async function getProcurementList() {
  return flooringPurchaseOrders.map((po) => ({
    id: po.id,
    poNumber: po.poNumber,
    vendorName: getPartnerById(po.partnerId)?.name ?? "Unknown vendor",
    projectName: getProjectById(po.projectId)?.name ?? "Unknown project",
    status: po.status,
    orderDate: po.orderDate,
    expectedDate: po.expectedDate,
    totalAmount: po.amount.toLocaleString("en-CA", { style: "currency", currency: "CAD" }),
    notes: `${po.material} for ${po.destination}`,
    createdAt: po.orderDate
  }));
}

export async function getProcurementById(id: string) {
  const row = (await getProcurementList()).find((entry) => entry.id === id);
  return row ?? null;
}

export async function createProcurement(payload: Omit<ProcurementRecord, 'id' | 'createdAt'>) {
  return {
    id: String(flooringPurchaseOrders.length + 1),
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function updateProcurement(id: string, payload: Partial<ProcurementRecord>) {
  return { id, ...payload };
}

export async function deleteProcurement(id: string) {
  return { success: true, id };
}











