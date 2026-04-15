import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getPaymentsReceivedList } from "@/lib/services/payments-received";

export default async function Page() {
  const data = await getPaymentsReceivedList();

  return (
    <AppShell title="Payments Received" subtitle="Incoming payments overview">
      <PageActions title="Payments Received" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Projects', href: '/projects' }, { label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Finance', href: '/finance' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/payments-received" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Projects Module', value: '/projects' }, { label: 'Vendor / Client Module', value: '/vendors-clients' }, { label: 'Finance Module', value: '/finance' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Projects', href: '/projects' }, { label: 'Payments Received', href: '/payments-received' }, { label: 'Finance', href: '/finance' }, { label: 'Reports', href: '/reports' }]}
      />
    </AppShell>
  );
}

















