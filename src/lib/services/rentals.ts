import { flooringProjects } from "@/lib/flooring-data";

export type RentalsRecord = {
  id: string;
  rentalNumber: string;
  assetName: string;
  projectName: string;
  vendorName?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  dailyRate?: string;
  totalCost?: string;
  notes?: string;
};

export async function getRentalsList() {
  return [
    {
      id: "rental-1",
      rentalNumber: "R-4101",
      assetName: "Material lift + lobby protection carts",
      projectName: flooringProjects[0].name,
      vendorName: "United Rentals",
      status: "active",
      startDate: "2026-04-16",
      endDate: "2026-04-24",
      dailyRate: "185.00",
      totalCost: "1665.00",
      notes: "Needed for vertical transport staging"
    },
    {
      id: "rental-2",
      rentalNumber: "R-4102",
      assetName: "Storage container",
      projectName: flooringProjects[1].name,
      vendorName: "Mobile Mini",
      status: "scheduled",
      startDate: "2026-04-20",
      endDate: "2026-05-04",
      dailyRate: "48.00",
      totalCost: "672.00",
      notes: "Temporary on-site secure storage"
    }
  ];
}

export async function getRentalsById(id: string) {
  return (await getRentalsList()).find(x => x.id === id) ?? null;
}

export async function createRentals(data: any) {
  return { id: 'new', ...data };
}











