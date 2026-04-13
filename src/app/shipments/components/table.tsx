"use client";

import { ColumnDef } from "@tanstack/react-table";

export type shipmentsRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const shipmentsColumns: ColumnDef<shipmentsRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








