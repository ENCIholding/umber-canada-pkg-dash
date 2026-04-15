import React from "react";
import { AuthActions } from "./auth-actions";

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AppShell({ children, title, subtitle }: AppShellProps) {
  return (
    <div className="app-shell min-h-screen bg-[radial-gradient(circle_at_top,rgba(180,214,188,0.18),transparent_32%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))] text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b bg-background/85 px-6 py-4 backdrop-blur">
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








