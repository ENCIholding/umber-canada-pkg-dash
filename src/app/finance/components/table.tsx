"use client";

import { ColumnDef } from "@tanstack/react-table";

export type financeRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const financeColumns: ColumnDef<financeRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












