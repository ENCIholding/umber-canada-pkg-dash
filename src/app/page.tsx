import Link from "next/link";

const modules = [
  { label: "Dashboard", href: "/dashboard", description: "Daily operating overview" },
  { label: "Procurement", href: "/procurement", description: "Purchase flow and supplier activity" },
  { label: "Projects", href: "/projects", description: "Job tracking and execution status" },
  { label: "Finance", href: "/finance", description: "Cash flow, expenses, and rentals" },
  { label: "Reports", href: "/reports", description: "Exports, summaries, and printable views" },
  { label: "Vendors & Clients", href: "/vendors-clients", description: "Commercial relationships and contacts" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border bg-card p-10 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Internal Flooring System</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Umber Canada Dashboard</h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground">
            A single internal workspace for flooring operations, finance, deliveries, files, reports,
            stakeholders, and project follow-through.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white" href="/login">
              Sign In
            </Link>
            <Link className="rounded-md border px-4 py-2 text-sm font-medium" href="/dashboard">
              Open Dashboard
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link key={module.href} className="rounded-2xl border p-5 transition hover:bg-accent/30" href={module.href}>
              <div className="text-lg font-semibold">{module.label}</div>
              <div className="mt-2 text-sm text-muted-foreground">{module.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}















