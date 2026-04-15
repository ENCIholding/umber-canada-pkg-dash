import { flooringDeliveries, getProjectById } from "@/lib/flooring-data";

export type DeliveriesFormValues = {
  id?: string;
  name: string;
  status?: string;
  dropDate?: string;
  dropWindow?: string;
  area?: string;
  installer?: string;
  notes?: string;
};

export async function getDeliveriesList() {
  return flooringDeliveries.map((delivery) => ({
    id: delivery.id,
    name: getProjectById(delivery.projectId)?.name ?? delivery.area,
    status: delivery.status,
    dropDate: delivery.dropDate,
    dropWindow: delivery.dropWindow,
    area: delivery.area,
    installer: delivery.installer,
    notes: delivery.notes
  }));
}

export async function getDeliveriesById(id: string) {
  return (await getDeliveriesList()).find((entry) => entry.id === id) ?? null;
}

export const getdeliveriesById = getDeliveriesById;











