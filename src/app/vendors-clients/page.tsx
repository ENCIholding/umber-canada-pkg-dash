"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";

export default function VendorsClientsPage() {
  const [rows, setRows] = useState<any[]>([]);

  const loadRows = async () => {
    const res = await fetch("/api/vendors-clients");
    const data = await res.json();
    setRows(data);
  };

  useEffect(() => {
    loadRows();
  }, []);

  return (
    <AppShell>
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Vendors / Clients</h1>

        <div className="mt-6 overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left dark:border-white/10">
                <th className="px-3 py-2">Company</th>
                <th className="px-3 py-2">Category</th>
                <th className="px-3 py-2">Credit Terms</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-black/5 dark:border-white/5">
                  <td className="px-3 py-2 text-zinc-900 dark:text-white">{row.masterEntity?.companyName}</td>
                  <td className="px-3 py-2 text-zinc-600 dark:text-zinc-300">{row.category}</td>
                  <td className="px-3 py-2 text-zinc-600 dark:text-zinc-300">{row.creditTerms || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
