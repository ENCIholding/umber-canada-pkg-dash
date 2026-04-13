"use client";

import { ColumnDef } from "@tanstack/react-table";

export type deliveriesRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const deliveriesColumns: ColumnDef<deliveriesRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








