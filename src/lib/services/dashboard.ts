import {
  flooringDeliveries,
  flooringProjects,
  flooringPurchaseOrders,
  flooringReceiving,
  flooringShipments,
  flooringStakeholders
} from "@/lib/flooring-data";

export type DashboardFormValues = {
  id?: string;
  name: string;
  status?: string;
  helper?: string;
};

export async function getDashboardList() {
  return [
    {
      id: "ops-1",
      name: "Active flooring jobs",
      status: String(flooringProjects.filter((project) => project.status !== "closed").length),
      helper: "Projects currently moving through supply or install"
    },
    {
      id: "ops-2",
      name: "Open purchase orders",
      status: String(flooringPurchaseOrders.filter((po) => po.status !== "received").length),
      helper: "Orders still in ordered, partial, or release state"
    },
    {
      id: "ops-3",
      name: "Loads in motion",
      status: String(flooringShipments.filter((shipment) => shipment.status !== "at-yard").length),
      helper: "Carrier loads needing ETA and site coordination"
    },
    {
      id: "ops-4",
      name: "Follow-ups due",
      status: String(flooringStakeholders.filter((stakeholder) => stakeholder.status !== "active").length),
      helper: "Stakeholders waiting on approval or response"
    }
  ];
}

export async function getDashboardById(id: string) {
  return (await getDashboardList()).find((entry) => entry.id === id) ?? null;
}

export const getdashboardById = getDashboardById;











