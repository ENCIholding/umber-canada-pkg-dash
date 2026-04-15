"use client";

import { ColumnDef } from "@tanstack/react-table";

export type emailRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const emailColumns: ColumnDef<emailRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












