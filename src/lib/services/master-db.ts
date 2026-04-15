import { flooringPartners, flooringProjects, flooringPurchaseOrders } from "@/lib/flooring-data";

export type MasterDbFormValues = {
  id?: string;
  name: string;
  status?: string;
};

export async function getMasterDbList() {
  return flooringPurchaseOrders.map((po) => {
    const project = flooringProjects.find((entry) => entry.id === po.projectId);
    const partner = flooringPartners.find((entry) => entry.id === po.partnerId);

    return {
      id: po.id,
      name: po.material,
      status: po.status,
      category: po.category,
      quantity: po.quantity,
      supplier: partner?.name ?? "Unknown supplier",
      projectCode: project?.code ?? "Unassigned",
      destination: po.destination,
      expectedDate: po.expectedDate,
      amount: po.amount
    };
  });
}

export async function getMasterDbById(id: string) {
  return (await getMasterDbList()).find((entry) => entry.id === id) ?? null;
}

export const getmasterdbById = getMasterDbById;











