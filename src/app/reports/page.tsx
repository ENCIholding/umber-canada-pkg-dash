import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/app/components/layout/email-export-quick-actions";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getReportsList } from "@/lib/services/reports";

export default async function Page() {
  const data = await getReportsList();

  return (
    <AppShell title="Reports" subtitle="Reporting and analytics workspace">
      <PageActions title="Reports" />
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {data.map((report) => (
          <section key={report.id} className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">{report.reportName}</div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{report.status}</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{report.category} | {report.scope}</div>
            <div className="mt-4 grid gap-3">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Format</div>
                <div className="mt-1 font-medium">{report.format}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Owner</div>
                <div className="mt-1 font-medium">{report.owner}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">{report.notes}</div>
          </section>
        ))}
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





















