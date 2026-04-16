import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getExpensesList } from "@/lib/services/expenses";

export default async function Page() {
  const data = await getExpensesList();
  const total = data.reduce((sum, item) => sum + Number(item.amount ?? 0), 0);

  return (
    <AppShell title="Expenses" subtitle="job support costs, overhead-linked spend, and receipt tracking">
      <PageActions title="Expenses" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Expense records</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Tracked indirect and direct costs supporting flooring execution.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Current total</div>
          <div className="mt-2 text-3xl font-semibold">${total.toLocaleString()}</div>
          <div className="mt-2 text-sm text-muted-foreground">This visible cost should feed finance, margin review, and reporting flows.</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Control focus</div>
          <div className="mt-2 text-lg font-semibold">Tie cost to job reality</div>
          <div className="mt-2 text-sm text-muted-foreground">Every freight, QA, or support expense should connect to a project, receipt, or approval context.</div>
        </section>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border">
        <table className="min-w-full divide-y text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Expense</th>
              <th className="px-4 py-3">Vendor / Project</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Receipt</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4">
                  <div className="font-medium">{item.expenseNumber}</div>
                  <div className="mt-1 text-muted-foreground">{item.expenseDate}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-medium">{item.vendorName}</div>
                  <div className="mt-1 text-muted-foreground">{item.projectName}</div>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{item.category}</td>
                <td className="px-4 py-4 font-medium">${Number(item.amount ?? 0).toLocaleString()}</td>
                <td className="px-4 py-4 text-muted-foreground">{item.receiptRef}</td>
                <td className="px-4 py-4 text-muted-foreground">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Projects", href: "/projects" }, { label: "Finance", href: "/finance" }, { label: "Reports", href: "/reports" }, { label: "File Center", href: "/file-center" }]}
      />

      <ModuleHomeLinks basePath="/expenses" />

      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: "Projects Module", value: "/projects" }, { label: "Finance Module", value: "/finance" }, { label: "File Center", value: "/file-center" }]}
      />

      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: "Projects", href: "/projects" }, { label: "Expenses", href: "/expenses" }, { label: "Finance", href: "/finance" }, { label: "Reports", href: "/reports" }]}
      />
    </AppShell>
  );
}
