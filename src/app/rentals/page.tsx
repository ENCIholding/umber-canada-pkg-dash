import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { getRentalsList } from "@/lib/services/rentals";

export default async function Page() {
  const data = await getRentalsList();
  const active = data.filter((item) => item.status === "active").length;
  const scheduled = data.filter((item) => item.status === "scheduled").length;

  return (
    <AppShell title="Rentals" subtitle="warehouse, site, and equipment rental control for flooring operations">
      <PageActions title="Rentals" />

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Active rentals</div>
          <div className="mt-2 text-3xl font-semibold">{active}</div>
          <div className="mt-2 text-sm text-muted-foreground">Equipment or storage assets currently affecting field execution.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Scheduled rentals</div>
          <div className="mt-2 text-3xl font-semibold">{scheduled}</div>
          <div className="mt-2 text-sm text-muted-foreground">Upcoming booked assets tied to install windows and staging plans.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Operational focus</div>
          <div className="mt-2 text-lg font-semibold">Avoid idle rental burn</div>
          <div className="mt-2 text-sm text-muted-foreground">Tie rentals to release gates so containers, lifts, and protection carts are only deployed when sites are ready.</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {data.map((rental) => (
          <section key={rental.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{rental.rentalNumber}</div>
                <div className="mt-1 text-lg font-semibold">{rental.assetName}</div>
                <div className="mt-1 text-sm text-muted-foreground">{rental.vendorName} | {rental.projectName}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{rental.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Rental window</div>
                <div className="mt-1 font-medium">{rental.startDate} to {rental.endDate}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Cost</div>
                <div className="mt-1 font-medium">${rental.totalCost} total | ${rental.dailyRate}/day</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">{rental.notes}</div>
          </section>
        ))}
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Finance", href: "/finance" }, { label: "Compliance", href: "/compliance" }, { label: "Reports", href: "/reports" }]}
      />

      <ModuleHomeLinks basePath="/rentals" />
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: "Rentals", href: "/rentals" },
          { label: "Projects", href: "/projects" },
          { label: "Finance", href: "/finance" },
          { label: "Reports", href: "/reports" }
        ]}
      />

      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: "Finance Module", value: "/finance" },
          { label: "Compliance Module", value: "/compliance" },
          { label: "Reports Module", value: "/reports" }
        ]}
      />

      <DocumentActionsBar entityName="rentals" />
    </AppShell>
  );
}
