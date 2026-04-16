import { Sidebar } from "@/components/layout/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(180,214,188,0.18),transparent_30%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))]">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">{children}</main>
      </div>
    </div>
  );
}
