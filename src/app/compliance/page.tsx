import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { getComplianceList } from "@/lib/services/compliance";

export default async function Page() {
  const data = await getComplianceList();
  const pending = data.filter((item) => item.status !== "completed").length;

  return (
    <AppShell title="Compliance" subtitle="documentation, licenses, insurance, and renewal control for internal operations">
      <PageActions title="Compliance" />

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Open compliance items</div>
          <div className="mt-2 text-3xl font-semibold">{pending}</div>
          <div className="mt-2 text-sm text-muted-foreground">Anything pending here should be visible before projects, deliveries, or billing move forward.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Document action</div>
          <div className="mt-2 text-lg font-semibold">Upload and notify</div>
          <div className="mt-2 text-sm text-muted-foreground">Use the page actions above to upload permit packages, insurance files, agreements, and renewal proof.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Ops integration</div>
          <div className="mt-2 text-lg font-semibold">Compliance is operational</div>
          <div className="mt-2 text-sm text-muted-foreground">Missing paperwork should block release gates, deliveries, renewals, or external coordination automatically.</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {data.map((record) => (
          <section key={record.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{record.recordNumber}</div>
                <div className="mt-1 text-lg font-semibold">{record.category}</div>
                <div className="mt-1 text-sm text-muted-foreground">{record.authority} | {record.projectName}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{record.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Due date</div>
                <div className="mt-1 font-medium">{record.dueDate ?? "Monitor manually"}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Completed</div>
                <div className="mt-1 font-medium">{record.completedDate ?? "Not yet completed"}</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">{record.notes ?? "Tie this record to files, renewals, and related project milestones."}</div>
          </section>
        ))}
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Projects", href: "/projects" }, { label: "File Center", href: "/file-center" }, { label: "Automation", href: "/automation" }]}
      />
      <RelatedRecordBlock
        title="Compliance Connectors"
        items={[
          { label: "File Center", value: "Attach permits, insurance docs, corporate records, and signed agreements" },
          { label: "Automation", value: "Escalate renewal risk and missing attachments before operations move blind" },
          { label: "Projects", value: "Link compliance state to release gates and delivery readiness" }
        ]}
      />
      <ModuleHomeLinks basePath="/compliance" />
      <DocumentActionsBar entityName="compliance" />
    </AppShell>
  );
}
