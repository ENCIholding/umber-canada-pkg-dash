import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getReceivingList } from "@/src/lib/services/receiving";

export default async function Page() {
  const data = await getReceivingList();
  return (
    <AppShell title="receiving" subtitle="receiving overview">
      <PageActions title="receiving" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Shipments', href: '/shipments' }, { label: 'Procurement', href: '/procurement' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/receiving" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Procurement', href: '/procurement' },
          { label: 'Shipments', href: '/shipments' },
          { label: 'Receiving', href: '/receiving' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Shipments Module', value: '/shipments' },
          { label: 'File Center', value: '/file-center' }
        ]}
      />
    </AppShell>
  );
}














