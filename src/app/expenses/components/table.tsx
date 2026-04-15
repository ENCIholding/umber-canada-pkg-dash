'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type ExpensesRow = {
  id: string;
  expenseNumber: string;
  vendorName: string;
  projectName?: string;
  amount?: string;
  expenseDate?: string;
};

export const ExpensesColumns: ColumnDef<ExpensesRow>[] = [
  { accessorKey: 'expenseNumber', header: 'Expense #' },
  { accessorKey: 'vendorName', header: 'Vendor' },
  { accessorKey: 'projectName', header: 'Project' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'expenseDate', header: 'Date' },
];












