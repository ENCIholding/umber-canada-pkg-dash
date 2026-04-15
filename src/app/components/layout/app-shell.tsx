import React from "react";
import { AuthActions } from "./auth-actions";

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AppShell({ children, title, subtitle }: AppShellProps) {
  return (
    <div className="app-shell min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b px-6 py-4">
        <div>
          {title ? <h1 className="text-2xl font-semibold capitalize">{title}</h1> : null}
          {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        <AuthActions />
      </div>
      <main className="mx-auto max-w-7xl px-6 py-6">{children}</main>
    </div>
  );
}








