import { AppShell } from "@/components/layout/app-shell";

export default function LicensePage() {
  return (
    <AppShell>
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">License / Authorized Use</h1>

        <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
          <p>© Umber Canada. Authorized users only.</p>
          <p>Built for Umber Canada by Estate Nest Capital Inc.</p>
          <p>Allowed to use at no cost for authorized Umber Canada operations.</p>
          <p>Internal flooring operations system for estimation, procurement, shipments, receiving, projects, finance, files, and reporting.</p>
          <p>
            Unauthorized copying, resale, redistribution, reverse engineering, replication,
            transfer to external parties, or public deployment without written approval is strictly prohibited.
          </p>
          <p>Internal use only. Access is intended for approved Umber Canada users and teams.</p>
          <p>All rights reserved under applicable law unless expressly granted in writing by the authorized owner.</p>
          <p>Version history, automation rules, and operational changes should be maintained for internal governance and auditability.</p>
        </div>
      </div>
    </AppShell>
  );
}















