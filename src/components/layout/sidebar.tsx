"use client";

import Link from "next/link";
import { sidebarNavigation } from "@/lib/constants/navigation";

export function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-white/10 bg-zinc-950 text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <h1 className="text-lg font-bold tracking-tight">Umber Canada</h1>
        <p className="mt-1 text-xs text-zinc-400">Internal Dashboard</p>
      </div>

      <nav className="space-y-1 p-3">
        {sidebarNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
