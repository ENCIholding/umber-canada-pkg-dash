import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { getTaxationList } from "@/lib/services/taxation";

export default async function Page() {
  const data = await getTaxationList();

  return (
    <AppShell title="Taxation" subtitle="GST, filing support, remittance timing, and tax documentation visibility">
      <PageActions title="Taxation" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Tracked tax items</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Tax obligations and support records tied to operating and governance control.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Priority view</div>
          <div className="mt-2 text-lg font-semibold">Deadlines before surprises</div>
          <div className="mt-2 text-sm text-muted-foreground">Keep GST, filings, payroll references, and accountant packs visible before deadlines collapse into emergencies.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Governance direction</div>
          <div className="mt-2 text-lg font-semibold">Audit-ready tax trail</div>
          <div className="mt-2 text-sm text-muted-foreground">This module should become part of the deeper compliance and finance evidence chain.</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {data.map((item) => (
          <section key={item.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.taxNumber}</div>
                <div className="mt-1 text-lg font-semibold">{item.type}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.jurisdiction} | {item.projectName}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{item.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Due date</div>
                <div className="mt-1 font-medium">{item.dueDate ?? "Monitor"}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Amount</div>
                <div className="mt-1 font-medium">{item.amount ?? "TBD"}</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">{item.notes}</div>
          </section>
        ))}
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Finance", href: "/finance" }, { label: "Compliance", href: "/compliance" }, { label: "Reports", href: "/reports" }]}
      />
      <RelatedRecordBlock
        title="Taxation Connectors"
        items={[
          { label: "Finance", value: "Use revenue, expense, and AR/AP visibility to support remittance review" },
          { label: "Compliance", value: "Tie supporting docs, filings, and renewals into the evidence chain" },
          { label: "Reports", value: "Export tax summaries or accountant packs when needed" }
        ]}
      />
      <ModuleHomeLinks basePath="/taxation" />
    </AppShell>
  );
}
