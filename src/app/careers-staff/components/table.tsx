"use client";

import { ColumnDef } from "@tanstack/react-table";

export type careersstaffRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const careersstaffColumns: ColumnDef<careersstaffRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








