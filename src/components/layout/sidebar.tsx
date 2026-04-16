"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { appNavigation } from "@/lib/constants/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r bg-background/90 xl:flex xl:min-h-screen xl:flex-col">
      <div className="border-b px-5 py-5">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Umber Canada</div>
        <div className="mt-2 text-lg font-semibold">Flooring Operations OS</div>
        <div className="mt-1 text-sm text-muted-foreground">Procurement, install, documents, finance, and automation in one command layer.</div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
          {appNavigation.map((group) => (
            <div key={group.title}>
              <div className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.title}
              </div>
              <div className="mt-2 space-y-1">
                {(group.children ?? []).map((item) => {
                  if (!item.href) {
                    return null;
                  }

                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition " +
                        (active
                          ? "bg-foreground text-background shadow-sm"
                          : "text-foreground/80 hover:bg-accent hover:text-foreground")
                      }
                    >
                      <span>{item.title}</span>
                      <span className={"text-[10px] uppercase tracking-[0.16em] " + (active ? "text-background/70" : "text-muted-foreground")}>
                        Open
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
