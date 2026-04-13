"use client";

import { ColumnDef } from "@tanstack/react-table";

export type reportsRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const reportsColumns: ColumnDef<reportsRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








