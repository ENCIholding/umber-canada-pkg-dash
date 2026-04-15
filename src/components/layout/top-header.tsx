"use client";

import { BackButton } from "@/components/layout/back-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function TopHeader() {
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    window.location.href = "/login";
  };

  return (
    <header className="flex items-center justify-between border-b border-black/10 bg-white px-6 py-4 dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-center gap-3">
        <BackButton />
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Dashboard
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Welcome to Umber Canada internal operations.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button
          onClick={handleLogout}
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-85 dark:bg-white dark:text-black"
        >
          Logout
        </button>
      </div>
    </header>
  );
}














