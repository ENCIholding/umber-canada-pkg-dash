import React from "react";

export default function DashboardPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          High-level view of operations, finance, logistics, and compliance across Umber Canada.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-xs text-muted-foreground">Open projects</p>
          <p className="mt-2 text-2xl font-semibold">0</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Connect project data to see live counts.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-xs text-muted-foreground">Active deliveries</p>
          <p className="mt-2 text-2xl font-semibold">0</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Link logistics to surface in-transit shipments.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-xs text-muted-foreground">Outstanding receivables</p>
          <p className="mt-2 text-2xl font-semibold">$0</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Finance integration will populate live balances.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-xs text-muted-foreground">Compliance tasks</p>
          <p className="mt-2 text-2xl font-semibold">0</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Compliance module will surface upcoming obligations.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="text-sm font-medium">Recent activity</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Once data sources are connected, this area will show the latest movements across
            projects, deliveries, and finance.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h2 className="text-sm font-medium">Quick navigation</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• Go to File Center for documents</li>
            <li>• Open Calendar Schedule for planning</li>
            <li>• Review Deliveries and Shipments status</li>
            <li>• Jump into Finance and Taxation modules</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
