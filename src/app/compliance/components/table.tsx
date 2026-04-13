"use client";

import { ColumnDef } from "@tanstack/react-table";

export type complianceRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const complianceColumns: ColumnDef<complianceRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








