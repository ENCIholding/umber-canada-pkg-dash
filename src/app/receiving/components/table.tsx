"use client";

import { ColumnDef } from "@tanstack/react-table";

export type receivingRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const receivingColumns: ColumnDef<receivingRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












