import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/src/app/components/layout/email-export-quick-actions";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/src/app/components/layout/email-export-quick-actions";
import { getReportsList } from "@/src/lib/services/reports";

export default async function Page() {
  const data = await getReportsList();

  return (
    <AppShell title="Reports" subtitle="Reporting and analytics workspace">
      <PageActions title="Reports" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Finance', href: '/finance' }, { label: 'Projects', href: '/projects' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/reports" />
    
      <DocumentActionsBar entityName="reports" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Finance', href: '/finance' }, { label: 'Projects', href: '/projects' }, { label: 'Reports', href: '/reports' }, { label: 'Email', href: '/email' }]}
      />
    
      <EmailExportQuickActions module="reports" subject="Reports Export Actions" />
    </AppShell>
  );
}

















