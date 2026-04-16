import { AppShell } from "@/components/layout/app-shell";

const ownershipLines = [
  "Created by Kanwar Sharma",
  "Used by Umber Canada",
  "Proprietary Internal Business Software",
  "Unauthorized copying, reproduction, resale, redistribution, reverse engineering, replication, or external deployment without written approval is strictly prohibited",
  "Internal use only",
  "All rights reserved under applicable law",
  "Version history and change logs must be maintained for internal governance"
];

export default function LicensePage() {
  return (
    <AppShell>
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">License / Readme</h1>

        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Ownership and internal-use wording aligned to the master build prompt.
        </div>

        <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
          {ownershipLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
