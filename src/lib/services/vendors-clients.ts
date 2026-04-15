import { flooringPartners } from "@/lib/flooring-data";

export async function getVendorsClientsList() {
  return flooringPartners.map((partner) => ({
    id: partner.id,
    name: partner.name,
    type: partner.type,
    specialty: partner.specialty,
    serviceArea: partner.serviceArea,
    creditTerms: partner.creditTerms,
    status: partner.status
  }));
}

export async function getVendorsClientsById(id: string) {
  return (await getVendorsClientsList()).find((entry) => entry.id === id) ?? null;
}











