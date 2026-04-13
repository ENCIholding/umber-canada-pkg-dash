import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getPaymentsSentList } from "@/src/lib/services/payments-sent";

export default async function Page() {
  const data = await getPaymentsSentList();

  return (
    <AppShell title="Payments Sent" subtitle="Outgoing payments overview">
      <PageActions title="Payments Sent" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Finance', href: '/finance' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/payments-sent" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Vendor / Client Module', value: '/vendors-clients' }, { label: 'Procurement Module', value: '/procurement' }, { label: 'Finance Module', value: '/finance' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Procurement', href: '/procurement' }, { label: 'Payments Sent', href: '/payments-sent' }, { label: 'Finance', href: '/finance' }, { label: 'Reports', href: '/reports' }]}
      />
    </AppShell>
  );
}













