'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type PaymentsSentRow = {
  id: string;
  paymentNumber: string;
  payeeName: string;
  projectName?: string;
  status?: string;
  amount?: string;
  paymentDate?: string;
};

export const PaymentsSentColumns: ColumnDef<PaymentsSentRow>[] = [
  { accessorKey: 'paymentNumber', header: 'Payment #' },
  { accessorKey: 'payeeName', header: 'Payee' },
  { accessorKey: 'projectName', header: 'Project' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'paymentDate', header: 'Payment Date' },
];












