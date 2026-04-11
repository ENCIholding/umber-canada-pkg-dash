import { AppShell } from "@/components/layout/app-shell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Total Sales</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">$0.00</h3>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Payments Pending</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">$0.00</h3>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Active Projects</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">0</h3>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">
          Welcome to Umber Canada Dashboard
        </h2>
        <p className="mt-2 text-zinc-600">
          Authentication, shell layout, and protected-entry foundation are now in place.
        </p>
      </div>
    </AppShell>
  );
}
