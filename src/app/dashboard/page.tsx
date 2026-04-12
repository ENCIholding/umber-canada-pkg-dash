"use client";

import { AppShell } from "@/components/layout/app-shell";
import { useState } from "react";

export default function DashboardPage() {
  const [rows, setRows] = useState<any[]>([]);

  return (
    <AppShell>
      <h1>Dashboard</h1>
    </AppShell>
  );
}


