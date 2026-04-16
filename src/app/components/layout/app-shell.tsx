import React from "react";
import { AuthActions } from "./auth-actions";
import { Sidebar } from "@/components/layout/sidebar";

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AppShell({ children, title, subtitle }: AppShellProps) {
  return (
    <div className="app-shell min-h-screen bg-[radial-gradient(circle_at_top,rgba(180,214,188,0.18),transparent_30%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b bg-background/85 px-6 py-4 backdrop-blur">
            <div>
              {title ? <h1 className="text-2xl font-semibold capitalize">{title}</h1> : null}
              {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
            </div>
            <AuthActions />
          </div>
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
