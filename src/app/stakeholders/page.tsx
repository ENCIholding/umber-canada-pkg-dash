import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getStakeholdersList } from "@/src/lib/services/stakeholders";

export default async function Page() {
  const data = await getStakeholdersList();

  return (
    <AppShell title="Stakeholders" subtitle="Internal and external stakeholders">
      <PageActions title="Stakeholders" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Shipments', href: '/shipments' }, { label: 'Projects', href: '/projects' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/stakeholders" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Stakeholders', href: '/stakeholders' },
          { label: 'Projects', href: '/projects' },
          { label: 'Procurement', href: '/procurement' },
          { label: 'Shipments', href: '/shipments' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Shipments Module', value: '/shipments' },
          { label: 'Projects Module', value: '/projects' },
          { label: 'File Center', value: '/file-center' }
        ]}
      />
    
      <DocumentActionsBar entityName="stakeholders" />
    </AppShell>
  );
}














