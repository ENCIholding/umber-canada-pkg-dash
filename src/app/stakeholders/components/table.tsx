"use client";

import { ColumnDef } from "@tanstack/react-table";

export type stakeholdersRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const stakeholdersColumns: ColumnDef<stakeholdersRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












