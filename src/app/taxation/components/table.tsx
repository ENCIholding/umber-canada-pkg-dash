"use client";

import { ColumnDef } from "@tanstack/react-table";

export type taxationRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const taxationColumns: ColumnDef<taxationRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








