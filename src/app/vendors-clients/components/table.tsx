"use client";

import { ColumnDef } from "@tanstack/react-table";

export type vendorsclientsRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const vendorsclientsColumns: ColumnDef<vendorsclientsRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












