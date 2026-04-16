import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getGanttList } from "@/lib/services/gantt";

export default async function Page() {
  const data = await getGanttList();

  return (
    <AppShell title="gantt" subtitle="project phase sequencing across release gates, staging, install, and billing">
      <PageActions title="gantt" />

      <div className="mt-4 overflow-hidden rounded-2xl border">
        <table className="min-w-full divide-y text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Project / Phase</th>
              <th className="px-4 py-3">Owner</th>
              <th className="px-4 py-3">Window</th>
              <th className="px-4 py-3">Dependency</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((row) => (
              <tr key={row.id} className="transition hover:bg-muted/20">
                <td className="px-4 py-4">
                  <div className="font-medium">{row.name}</div>
                  <div className="mt-1 text-muted-foreground">{row.projectCode}</div>
                </td>
                <td className="px-4 py-4">{row.owner}</td>
                <td className="px-4 py-4 text-muted-foreground">{row.start} to {row.end}</td>
                <td className="px-4 py-4 text-muted-foreground">{row.dependency ?? "Start phase"}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">How to use this</div>
          <div className="mt-2 text-sm text-muted-foreground">Treat each phase as a release gate. If a dependency is blocked, do not let deliveries, crews, or billing proceed blind.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">Flooring-native focus</div>
          <div className="mt-2 text-sm text-muted-foreground">The schedule should revolve around site readiness, material staging, install sequence, punch work, and billing package completion.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">Next upgrade path</div>
          <div className="mt-2 text-sm text-muted-foreground">Move these phases into editable project timelines and auto-generate alerts when dependencies slip.</div>
        </section>
      </div>

      <ModuleHomeLinks basePath="/gantt" />
    </AppShell>
  );
}
