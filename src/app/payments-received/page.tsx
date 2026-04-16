import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getPaymentsReceivedList } from "@/lib/services/payments-received";

export default async function Page() {
  const data = await getPaymentsReceivedList();
  const collected = data
    .filter((item) => item.status === "received")
    .reduce((sum, item) => sum + Number(item.amount ?? 0), 0);

  return (
    <AppShell title="Payments Received" subtitle="incoming cash, draws, and billing follow-through tied to active jobs">
      <PageActions title="Payments Received" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Receipts tracked</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Progress draws, deposits, and cash collections linked to projects.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Collected</div>
          <div className="mt-2 text-3xl font-semibold">${collected.toLocaleString()}</div>
          <div className="mt-2 text-sm text-muted-foreground">Cash already received and recognized in the current working cycle.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Control focus</div>
          <div className="mt-2 text-lg font-semibold">Invoice from real progress</div>
          <div className="mt-2 text-sm text-muted-foreground">Collections should follow verified install progress, not assumptions or stale dates.</div>
        </section>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border">
        <table className="min-w-full divide-y text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Receipt</th>
              <th className="px-4 py-3">Payer / Project</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4">
                  <div className="font-medium">{item.receiptNumber}</div>
                  <div className="mt-1 text-muted-foreground">{item.receivedDate}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-medium">{item.payerName}</div>
                  <div className="mt-1 text-muted-foreground">{item.projectName}</div>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{item.category}</td>
                <td className="px-4 py-4 font-medium">${Number(item.amount ?? 0).toLocaleString()}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{item.status}</span>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Projects", href: "/projects" }, { label: "Vendors & Clients", href: "/vendors-clients" }, { label: "Finance", href: "/finance" }, { label: "Reports", href: "/reports" }]}
      />

      <ModuleHomeLinks basePath="/payments-received" />

      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: "Projects Module", value: "/projects" }, { label: "Vendor / Client Module", value: "/vendors-clients" }, { label: "Finance Module", value: "/finance" }]}
      />

      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: "Projects", href: "/projects" }, { label: "Payments Received", href: "/payments-received" }, { label: "Finance", href: "/finance" }, { label: "Reports", href: "/reports" }]}
      />
    </AppShell>
  );
}
