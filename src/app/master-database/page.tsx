"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";

export default function MasterDatabasePage() {
  const [rows, setRows] = useState<any[]>([]);
  const [companyName, setCompanyName] = useState("");
  const [entityType, setEntityType] = useState("OTHER");

  const loadRows = async () => {
    const res = await fetch("/api/master-database");
    const data = await res.json();
    setRows(data);
  };

  useEffect(() => {
    loadRows();
  }, []);

  const createRow = async () => {
    await fetch("/api/master-database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName,
        entityType,
      }),
    });

    setCompanyName("");
    setEntityType("OTHER");
    loadRows();
  };

  return (
    <AppShell>
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Master Database</h1>

        <div className="mt-4 flex flex-col gap-3 md:flex-row">
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
            className="rounded-xl border border-black/10 px-4 py-3 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
          />

          <select
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
            className="rounded-xl border border-black/10 px-4 py-3 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
          >
            <option value="OTHER">Other</option>
            <option value="STAKEHOLDER">Stakeholder</option>
            <option value="VENDOR_CLIENT">Vendor / Client</option>
          </select>

          <button
            onClick={createRow}
            className="rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-black"
          >
            Add
          </button>
        </div>

        <div className="mt-6 overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left dark:border-white/10">
                <th className="px-3 py-2">Company</th>
                <th className="px-3 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-black/5 dark:border-white/5">
                  <td className="px-3 py-2 text-zinc-900 dark:text-white">{row.companyName}</td>
                  <td className="px-3 py-2 text-zinc-600 dark:text-zinc-300">{row.entityType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
