import { flooringShipments, getPartnerById, getProjectById, flooringPurchaseOrders } from "@/lib/flooring-data";

export type ShipmentsFormValues = {
  id?: string;
  name: string;
  status?: string;
  loadNumber?: string;
  eta?: string;
  pallets?: number;
  destination?: string;
  risk?: string;
};

export async function getShipmentsList() {
  return flooringShipments.map((shipment) => {
    const po = flooringPurchaseOrders.find((entry) => entry.id === shipment.poId);
    const project = po ? getProjectById(po.projectId) : null;
    return {
      id: shipment.id,
      name: project?.name ?? shipment.loadNumber,
      status: shipment.status,
      loadNumber: shipment.loadNumber,
      eta: shipment.eta,
      pallets: shipment.pallets,
      destination: shipment.destination,
      risk: shipment.risk,
      carrier: getPartnerById(shipment.carrierId)?.name ?? "Unknown carrier"
    };
  });
}

export async function getShipmentsById(id: string) {
  return (await getShipmentsList()).find((entry) => entry.id === id) ?? null;
}

export const getshipmentsById = getShipmentsById;











