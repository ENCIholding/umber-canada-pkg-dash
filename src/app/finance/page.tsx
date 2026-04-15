import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/app/components/layout/email-export-quick-actions";
import { FinancePrintSnapshot } from "@/app/components/layout/finance-print-snapshot";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getFinanceSummary } from "@/lib/services/finance";

export default async function Page() {
  const data = await getFinanceSummary();

  return (
    <AppShell title="Finance Dashboard" subtitle="cash discipline across jobs, suppliers, and releases">
      <PageActions title="Finance" />
      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">Cash scorecard</div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {data.scorecard.map((item: { label: string; value: number; helper: string }) => (
              <div key={item.label} className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">{item.label}</div>
                <div className="mt-2 text-2xl font-semibold">
                  {item.value.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{item.helper}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border p-4 text-sm">
              <div className="text-muted-foreground">Outstanding customer draws</div>
              <div className="mt-1 font-semibold">
                {data.workingCapital.outstandingCustomerDraws.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}
              </div>
            </div>
            <div className="rounded-lg border p-4 text-sm">
              <div className="text-muted-foreground">Committed supplier releases</div>
              <div className="mt-1 font-semibold">
                {data.workingCapital.committedSupplierReleases.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}
              </div>
            </div>
            <div className="rounded-lg border p-4 text-sm">
              <div className="text-muted-foreground">Unbilled change allowance</div>
              <div className="mt-1 font-semibold">
                {data.workingCapital.unbilledChangeOrderAllowance.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">Finance alerts</div>
          <div className="mt-3 space-y-3">
            {data.alerts.map((alert: string) => (
              <div key={alert} className="rounded-lg border p-4 text-sm text-muted-foreground">
                {alert}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-accent/30 text-left">
            <tr>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">Cash In</th>
              <th className="px-4 py-3">Cash Out</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.collections.map((row: { project: string; cashIn: number; paidOut: number; notes: string }) => (
              <tr key={row.project} className="border-t">
                <td className="px-4 py-3 font-medium">{row.project}</td>
                <td className="px-4 py-3">{row.cashIn.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}</td>
                <td className="px-4 py-3">{row.paidOut.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Payments Sent', href: '/payments-sent' }, { label: 'Payments Received', href: '/payments-received' }, { label: 'Expenses', href: '/expenses' }, { label: 'Rentals', href: '/rentals' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/finance" />
    
      <DocumentActionsBar entityName="finance" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Payments Sent', href: '/payments-sent' }, { label: 'Payments Received', href: '/payments-received' }, { label: 'Expenses', href: '/expenses' }, { label: 'Rentals', href: '/rentals' }, { label: 'Finance', href: '/finance' }]}
      />
    
      <EmailExportQuickActions module="finance" subject="Finance Export Actions" />
    
      <FinancePrintSnapshot />
    </AppShell>
  );
}






















