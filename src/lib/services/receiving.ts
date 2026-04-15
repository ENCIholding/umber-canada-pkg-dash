import { flooringReceiving, flooringShipments } from "@/lib/flooring-data";

export type ReceivingFormValues = {
  id?: string;
  name: string;
  status?: string;
  warehouse?: string;
  receivedDate?: string;
  condition?: string;
  variance?: string;
  putAwayZone?: string;
};

export async function getReceivingList() {
  return flooringReceiving.map((entry) => {
    const shipment = flooringShipments.find((item) => item.id === entry.shipmentId);
    return {
      id: entry.id,
      name: shipment?.loadNumber ?? entry.warehouse,
      status: entry.condition,
      warehouse: entry.warehouse,
      receivedDate: entry.receivedDate,
      condition: entry.condition,
      variance: entry.variance,
      putAwayZone: entry.putAwayZone
    };
  });
}

export async function getReceivingById(id: string) {
  return (await getReceivingList()).find((entry) => entry.id === id) ?? null;
}

export const getreceivingById = getReceivingById;











