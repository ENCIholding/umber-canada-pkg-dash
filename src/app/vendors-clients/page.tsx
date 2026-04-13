import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getVendorsClientsList } from "@/src/lib/services/vendors-clients";

export default async function Page() {
  const data = await getVendorsClientsList();

  return (
    <AppShell title="Vendors & Clients" subtitle="Network and relationships">
      <PageActions title="Vendors & Clients" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Payments Sent', href: '/payments-sent' }, { label: 'Payments Received', href: '/payments-received' }, { label: 'Projects', href: '/projects' }]}
      />
    
      <ModuleHomeLinks basePath="/vendors-clients" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Procurement', href: '/procurement' }, { label: 'Payments Sent', href: '/payments-sent' }, { label: 'Payments Received', href: '/payments-received' }]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Payments Sent', value: '/payments-sent' },
          { label: 'Payments Received', value: '/payments-received' },
          { label: 'Projects Module', value: '/projects' }
        ]}
      />
    
      <DocumentActionsBar entityName="vendors-clients" />
    </AppShell>
  );
}














