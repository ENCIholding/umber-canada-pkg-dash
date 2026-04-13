import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getProcurementList } from "@/src/lib/services/procurement";

export default async function Page() {
  const data = await getProcurementList();

  return (
    <AppShell title="Procurement" subtitle="Procurement overview">
      <PageActions title="Procurement" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Projects', href: '/projects' }, { label: 'Shipments', href: '/shipments' }, { label: 'Payments Sent', href: '/payments-sent' }]}
      />
    
      <ModuleHomeLinks basePath="/procurement" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Vendor Module', value: '/vendors-clients' }, { label: 'Project Module', value: '/projects' }, { label: 'Shipment Module', value: '/shipments' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Procurement', href: '/procurement' }, { label: 'Shipments', href: '/shipments' }, { label: 'Receiving', href: '/receiving' }, { label: 'Deliveries', href: '/deliveries' }]}
      />
    </AppShell>
  );
}














