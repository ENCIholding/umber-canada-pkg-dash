import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getShipmentsList } from "@/src/lib/services/shipments";

export default async function Page() {
  const data = await getShipmentsList();
  return (
    <AppShell title="shipments" subtitle="shipments overview">
      <PageActions title="shipments" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Receiving', href: '/receiving' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'Projects', href: '/projects' }]}
      />
    
      <ModuleHomeLinks basePath="/shipments" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Procurement Module', value: '/procurement' }, { label: 'Receiving Module', value: '/receiving' }, { label: 'Deliveries Module', value: '/deliveries' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Procurement', href: '/procurement' }, { label: 'Shipments', href: '/shipments' }, { label: 'Receiving', href: '/receiving' }, { label: 'Deliveries', href: '/deliveries' }]}
      />
    </AppShell>
  );
}














