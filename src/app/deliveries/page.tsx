import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getDeliveriesList } from "@/src/lib/services/deliveries";

export default async function Page() {
  const data = await getDeliveriesList();
  return (
    <AppShell title="deliveries" subtitle="deliveries overview">
      <PageActions title="deliveries" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Shipments', href: '/shipments' }, { label: 'Projects', href: '/projects' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/deliveries" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Shipments', href: '/shipments' },
          { label: 'Deliveries', href: '/deliveries' },
          { label: 'Projects', href: '/projects' },
          { label: 'Reports', href: '/reports' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Shipments Module', value: '/shipments' },
          { label: 'Projects Module', value: '/projects' },
          { label: 'Reports Module', value: '/reports' }
        ]}
      />
    
      <DocumentActionsBar entityName="deliveries" />
    </AppShell>
  );
}














