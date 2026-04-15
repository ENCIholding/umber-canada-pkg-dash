"use client";

import { ColumnDef } from "@tanstack/react-table";

export type masterdbRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const masterdbColumns: ColumnDef<masterdbRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












