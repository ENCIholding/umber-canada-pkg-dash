import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/app/components/layout/email-export-quick-actions";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getFilesList } from "@/lib/services/file-center";
import { FileCenterTable } from "./file-center-table";

export default async function Page() {
  const data = await getFilesList();

  return (
    <AppShell title="File Center" subtitle="document vault for job packages, resumes, change orders, and compliance docs">
      <PageActions title="File Center" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Tracked documents</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Local file center records available to operations and admin teams</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Supported uploads</div>
          <div className="mt-2 text-lg font-semibold">PDF, Word, Excel, Resume Docs</div>
          <div className="mt-2 text-sm text-muted-foreground">PDF, DOC, DOCX, XLS, XLSX, CSV, RTF, TXT, and common image formats are accepted</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Next automation step</div>
          <div className="mt-2 text-lg font-semibold">Auto-notify stakeholders</div>
          <div className="mt-2 text-sm text-muted-foreground">Trigger supplier, candidate, or project notifications when new files land</div>
        </section>
      </div>

      <FileCenterTable initialFiles={data} />
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Projects', href: '/projects' }, { label: 'Procurement', href: '/procurement' }, { label: 'Compliance', href: '/compliance' }, { label: 'Automation', href: '/automation' }]}
      />
    
      <ModuleHomeLinks basePath="/file-center" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Projects Module', value: '/projects' }, { label: 'Procurement Module', value: '/procurement' }, { label: 'Automation Center', value: '/automation' }]}
      />
    
      <DocumentActionsBar entityName="file-center" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'File Center', href: '/file-center' }, { label: 'Projects', href: '/projects' }, { label: 'Compliance', href: '/compliance' }, { label: 'Automation', href: '/automation' }]}
      />
    
      <EmailExportQuickActions module="file-center" subject="File Center Export Actions" />
    </AppShell>
  );
}





















