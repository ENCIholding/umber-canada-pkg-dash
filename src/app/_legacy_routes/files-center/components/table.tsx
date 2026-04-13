"use client";

import { ColumnDef } from "@tanstack/react-table";

export type filescenterRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const filescenterColumns: ColumnDef<filescenterRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];