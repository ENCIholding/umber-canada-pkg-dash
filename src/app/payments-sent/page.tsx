import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getPaymentsSentList } from "@/lib/services/payments-sent";

export default async function Page() {
  const data = await getPaymentsSentList();
  const scheduledAmount = data
    .filter((item) => item.status !== "paid")
    .reduce((sum, item) => sum + Number(item.amount ?? 0), 0);

  return (
    <AppShell title="Payments Sent" subtitle="supplier, logistics, and ops disbursements linked to procurement and job movement">
      <PageActions title="Payments Sent" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Outgoing releases</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Tracked supplier or ops payments tied to real material and job commitments.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Scheduled exposure</div>
          <div className="mt-2 text-3xl font-semibold">${scheduledAmount.toLocaleString()}</div>
          <div className="mt-2 text-sm text-muted-foreground">Upcoming outgoing cash not yet fully cleared.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Control focus</div>
          <div className="mt-2 text-lg font-semibold">Release against actual readiness</div>
          <div className="mt-2 text-sm text-muted-foreground">Push funds only when receiving, access, or staging confirms the next move is real.</div>
        </section>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border">
        <table className="min-w-full divide-y text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Payee / Project</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4">
                  <div className="font-medium">{item.paymentNumber}</div>
                  <div className="mt-1 text-muted-foreground">{item.paymentDate}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-medium">{item.payeeName}</div>
                  <div className="mt-1 text-muted-foreground">{item.projectName}</div>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{item.method} | {item.referenceNumber}</td>
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
        links={[{ label: "Procurement", href: "/procurement" }, { label: "Vendors & Clients", href: "/vendors-clients" }, { label: "Finance", href: "/finance" }, { label: "Reports", href: "/reports" }]}
      />

      <ModuleHomeLinks basePath="/payments-sent" />

      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: "Vendor / Client Module", value: "/vendors-clients" }, { label: "Procurement Module", value: "/procurement" }, { label: "Finance Module", value: "/finance" }]}
      />

      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: "Vendors & Clients", href: "/vendors-clients" }, { label: "Procurement", href: "/procurement" }, { label: "Payments Sent", href: "/payments-sent" }, { label: "Finance", href: "/finance" }, { label: "Reports", href: "/reports" }]}
      />
    </AppShell>
  );
}
