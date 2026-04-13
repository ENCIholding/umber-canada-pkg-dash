import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getProjectsList } from "@/src/lib/services/projects";

export default async function Page() {
  const data = await getProjectsList();
  return (
    <AppShell title="projects" subtitle="projects overview">
      <PageActions title="projects" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Expenses', href: '/expenses' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'Reports', href: '/reports' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/projects" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Projects', href: '/projects' }, { label: 'Procurement', href: '/procurement' }, { label: 'Expenses', href: '/expenses' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Expenses Module', value: '/expenses' },
          { label: 'Deliveries Module', value: '/deliveries' },
          { label: 'Reports Module', value: '/reports' }
        ]}
      />
    
      <DocumentActionsBar entityName="projects" />
    </AppShell>
  );
}














