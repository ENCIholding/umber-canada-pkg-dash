import { flooringProjects } from "@/lib/flooring-data";

export type ExpensesRecord = {
  id: string;
  expenseNumber: string;
  vendorName: string;
  projectName: string;
  category?: string;
  status?: string;
  expenseDate?: string;
  amount?: string;
  receiptRef?: string;
  notes?: string;
};

export async function getExpensesList() {
  return flooringProjects.map((project, index) => ({
    id: `expense-${project.id}`,
    expenseNumber: `EXP-${6100 + index}`,
    vendorName: index % 2 === 0 ? "Site Logistics" : "Moisture Testing",
    projectName: project.name,
    category: index % 2 === 0 ? "Freight + handling" : "Pre-install QA",
    status: "paid",
    expenseDate: `2026-04-${10 + index}`,
    amount: String(640 + index * 185),
    receiptRef: `RCPT-${7100 + index}`,
    notes: `Indirect cost supporting ${project.code}`
  }));
}

export async function getExpensesById(id: string) {
  return (await getExpensesList()).find(x => x.id === id) ?? null;
}

export async function createExpenses(data: any) {
  return { id: 'new', ...data };
}











