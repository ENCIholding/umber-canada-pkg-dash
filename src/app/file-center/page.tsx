import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/app/components/layout/email-export-quick-actions";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getFilesList } from "@/lib/services/file-center";

export default async function Page() {
  const data = await getFilesList();

  return (
    <AppShell title="File Center" subtitle="Document and file management">
      <PageActions title="File Center" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Projects', href: '/projects' }, { label: 'Procurement', href: '/procurement' }, { label: 'Compliance', href: '/compliance' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/file-center" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Projects Module', value: '/projects' }, { label: 'Procurement Module', value: '/procurement' }, { label: 'Reports Module', value: '/reports' }]}
      />
    
      <DocumentActionsBar entityName="file-center" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'File Center', href: '/file-center' }, { label: 'Projects', href: '/projects' }, { label: 'Compliance', href: '/compliance' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <EmailExportQuickActions module="file-center" subject="File Center Export Actions" />
    </AppShell>
  );
}





















