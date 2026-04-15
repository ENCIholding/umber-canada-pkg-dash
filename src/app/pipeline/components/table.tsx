"use client";

import { ColumnDef } from "@tanstack/react-table";

export type pipelineRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const pipelineColumns: ColumnDef<pipelineRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];












