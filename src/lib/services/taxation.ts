export type TaxationRecord = {
  id: string;
  taxNumber: string;
  type: string;
  jurisdiction?: string;
  projectName?: string;
  status?: string;
  filingDate?: string;
  dueDate?: string;
  amount?: string;
  notes?: string;
};

const MOCK_TAXATION: TaxationRecord[] = [
  {
    id: "tax-1",
    taxNumber: "GST-001",
    type: "GST remittance",
    jurisdiction: "Canada",
    projectName: "Cross-project",
    status: "pending",
    dueDate: "2026-04-30",
    amount: "$18,420",
    notes: "Bundle March/April taxable sales and supplier input tax credits."
  },
  {
    id: "tax-2",
    taxNumber: "AB-CORP-004",
    type: "Corporate filing support",
    jurisdiction: "Alberta",
    projectName: "Entity-wide",
    status: "in review",
    filingDate: "2026-05-15",
    amount: "$4,800",
    notes: "Waiting on accountant review pack and final expense reconciliation."
  },
  {
    id: "tax-3",
    taxNumber: "PAY-REM-008",
    type: "Payroll tax reference",
    jurisdiction: "Canada",
    projectName: "Staff",
    status: "tracked",
    dueDate: "2026-04-22",
    amount: "$2,160",
    notes: "Placeholder payroll governance item until full payroll integration is wired."
  }
];

export async function getTaxationList() {
  return MOCK_TAXATION;
}

export async function getTaxationById(id: string) {
  return MOCK_TAXATION.find((entry) => entry.id === id) ?? null;
}
