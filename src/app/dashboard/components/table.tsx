"use client";

import { ColumnDef } from "@tanstack/react-table";

export type dashboardRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const dashboardColumns: ColumnDef<dashboardRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












