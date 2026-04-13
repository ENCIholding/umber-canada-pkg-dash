'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type PaymentsReceivedRow = {
  id: string;
  receiptNumber: string;
  payerName: string;
  projectName?: string;
  status?: string;
  amount?: string;
  receivedDate?: string;
};

export const PaymentsReceivedColumns: ColumnDef<PaymentsReceivedRow>[] = [
  { accessorKey: 'receiptNumber', header: 'Receipt #' },
  { accessorKey: 'payerName', header: 'Payer' },
  { accessorKey: 'projectName', header: 'Project' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'receivedDate', header: 'Received Date' },
];








