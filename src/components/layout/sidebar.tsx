"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarNavigation } from "@/lib/constants/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-black/10 bg-white text-zinc-900 dark:border-white/10 dark:bg-zinc-950 dark:text-white lg:block">
      <div className="border-b border-black/10 px-5 py-4 dark:border-white/10">
        <h1 className="text-lg font-bold tracking-tight">Umber Canada</h1>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          Internal Dashboard
        </p>
      </div>

      <nav className="space-y-1 p-3">
        {sidebarNavigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "block rounded-xl bg-emerald-500/15 px-3 py-2 text-sm font-medium text-emerald-700 transition dark:bg-emerald-500/15 dark:text-emerald-300"
                  : "block rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
