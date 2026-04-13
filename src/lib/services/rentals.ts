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

const MOCK_RENTALS: RentalsRecord[] = [
  {
    id: '1',
    rentalNumber: 'R-001',
    assetName: 'Scissor Lift',
    projectName: 'Parkallen',
    vendorName: 'United Rentals',
    status: 'active',
    totalCost: '1200.00'
  }
];

export async function getRentalsList() {
  return MOCK_RENTALS;
}

export async function getRentalsById(id: string) {
  return MOCK_RENTALS.find(x => x.id === id) ?? null;
}

export async function createRentals(data: any) {
  return { id: 'new', ...data };
}







