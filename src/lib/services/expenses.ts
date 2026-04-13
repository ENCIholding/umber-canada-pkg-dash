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

const MOCK_EXPENSES: ExpensesRecord[] = [
  {
    id: '1',
    expenseNumber: 'EXP-001',
    vendorName: 'Home Depot',
    projectName: 'Parkallen',
    category: 'Materials',
    status: 'paid',
    expenseDate: '2026-04-10',
    amount: '850.00',
  }
];

export async function getExpensesList() {
  return MOCK_EXPENSES;
}

export async function getExpensesById(id: string) {
  return MOCK_EXPENSES.find(x => x.id === id) ?? null;
}

export async function createExpenses(data: any) {
  return { id: 'new', ...data };
}







