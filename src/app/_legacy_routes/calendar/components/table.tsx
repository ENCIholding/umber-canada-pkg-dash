"use client";

import { ColumnDef } from "@tanstack/react-table";

export type calendarRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const calendarColumns: ColumnDef<calendarRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];