"use client";

import { Sidebar } from "./sidebar";
import { TopHeader } from "./top-header";
import PageActions from "./page-actions";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopHeader />
        <PageActions />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
