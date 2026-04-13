import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/src/app/components/layout/email-export-quick-actions";
import { FinancePrintSnapshot } from "@/src/app/components/layout/finance-print-snapshot";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/src/app/components/layout/email-export-quick-actions";
import { FinancePrintSnapshot } from "@/src/app/components/layout/finance-print-snapshot";
import { getFinanceSummary } from "@/src/lib/services/finance";

export default async function Page() {
  const data = await getFinanceSummary();

  return (
    <AppShell title="Finance Dashboard" subtitle="Financial overview across system">
      <PageActions title="Finance" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
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

















