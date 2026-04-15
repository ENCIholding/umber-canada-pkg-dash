"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function AuthActions() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="auth-actions flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Local session</span>
      <ThemeToggle />
      <button
        className="rounded-md border px-3 py-2 text-sm font-medium"
        onClick={handleLogout}
        type="button"
      >
        Sign Out
      </button>
    </div>
  );
}

export default AuthActions;







