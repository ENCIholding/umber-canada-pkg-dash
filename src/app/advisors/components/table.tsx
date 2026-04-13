"use client";

import { ColumnDef } from "@tanstack/react-table";

export type advisorsRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const advisorsColumns: ColumnDef<advisorsRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];









