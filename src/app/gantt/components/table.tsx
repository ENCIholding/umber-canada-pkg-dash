"use client";

import { ColumnDef } from "@tanstack/react-table";

export type ganttRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const ganttColumns: ColumnDef<ganttRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








