"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r min-h-screen">
      <nav className="p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "block px-3 py-2 rounded-md text-sm " +
                (active
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800")
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


