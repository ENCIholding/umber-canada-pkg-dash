'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type ProcurementRow = {
  id: string;
  poNumber: string;
  vendorName: string;
  projectName: string;
  status?: string;
  totalAmount?: string;
  orderDate?: string;
};

export const ProcurementColumns: ColumnDef<ProcurementRow>[] = [
  { accessorKey: 'poNumber', header: 'PO Number' },
  { accessorKey: 'vendorName', header: 'Vendor' },
  { accessorKey: 'projectName', header: 'Project' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'totalAmount', header: 'Amount' },
  { accessorKey: 'orderDate', header: 'Order Date' },
];








