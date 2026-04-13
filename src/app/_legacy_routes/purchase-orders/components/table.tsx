"use client";

import { ColumnDef } from "@tanstack/react-table";

export type purchaseordersRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const purchaseordersColumns: ColumnDef<purchaseordersRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];