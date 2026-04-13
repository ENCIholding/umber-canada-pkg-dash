"use client";

import { ColumnDef } from "@tanstack/react-table";

export type projectsRow = {
  id: string;
  name: string;
  status?: string;
  createdAt?: string;
};

export const projectsColumns: ColumnDef<projectsRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created" },
];








