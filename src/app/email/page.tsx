import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/src/app/components/layout/email-export-quick-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getEmailList } from "@/src/lib/services/email";

export default async function Page() {
  const data = await getEmailList();
  return (
    <AppShell title="email" subtitle="email overview">
      <PageActions title="email" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/email" />
    
      <EmailExportQuickActions module="email" subject="Email Actions" />
          <DocumentActionsBar entityName="email" />
          <RelatedLinks
        title="Connected Areas"
        links={[
          { label: 'Reports', href: '/reports' },
          { label: 'File Center', href: '/file-center' },
          { label: 'Finance', href: '/finance' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Reports Module', value: '/reports' },
          { label: 'File Center', value: '/file-center' },
          { label: 'Finance Module', value: '/finance' }
        ]}
      />
    </AppShell>
  );
}
















