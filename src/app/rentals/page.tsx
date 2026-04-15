import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { getRentalsList } from "@/lib/services/rentals";

export default async function Page() {
  const data = await getRentalsList();

  return (
    <AppShell title="Rentals" subtitle="Rental tracking overview">
      <PageActions title="Rentals" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Finance', href: '/finance' }, { label: 'Compliance', href: '/compliance' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/rentals" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Rentals', href: '/rentals' },
          { label: 'Finance', href: '/finance' },
          { label: 'Reports', href: '/reports' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Finance Module', value: '/finance' },
          { label: 'Compliance Module', value: '/compliance' },
          { label: 'Reports Module', value: '/reports' }
        ]}
      />
    
      <DocumentActionsBar entityName="rentals" />
    </AppShell>
  );
}

















