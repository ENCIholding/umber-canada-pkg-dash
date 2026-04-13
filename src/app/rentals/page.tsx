import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getRentalsList } from "@/src/lib/services/rentals";

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













