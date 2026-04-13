'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type RentalsRow = {
  id: string;
  rentalNumber: string;
  assetName: string;
  projectName?: string;
  status?: string;
  totalCost?: string;
};

export const RentalsColumns: ColumnDef<RentalsRow>[] = [
  { accessorKey: 'rentalNumber', header: 'Rental #' },
  { accessorKey: 'assetName', header: 'Asset' },
  { accessorKey: 'projectName', header: 'Project' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'totalCost', header: 'Total Cost' },
];








