import { AppShell } from "@/components/layout/app-shell";

export default function LicensePage() {
  return (
    <AppShell>
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">License / Readme</h1>

        <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
          <p>Created by Kanwar Sharma</p>
          <p>Used by Umber Canada</p>
          <p>Proprietary Internal Business Software</p>
          <p>
            Unauthorized copying, reproduction, resale, redistribution, reverse engineering,
            replication, or external deployment without written approval is strictly prohibited.
          </p>
          <p>Internal use only</p>
          <p>All rights reserved under applicable law</p>
          <p>Version history and change logs must be maintained for internal governance</p>
        </div>
      </div>
    </AppShell>
  );
}


