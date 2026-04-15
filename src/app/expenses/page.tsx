import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getExpensesList } from "@/lib/services/expenses";

export default async function Page() {
  const data = await getExpensesList();

  return (
    <AppShell title="Expenses" subtitle="Expense tracking overview">
      <PageActions title="Expenses" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Projects', href: '/projects' }, { label: 'Finance', href: '/finance' }, { label: 'Reports', href: '/reports' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/expenses" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Projects Module', value: '/projects' }, { label: 'Finance Module', value: '/finance' }, { label: 'File Center', value: '/file-center' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Projects', href: '/projects' }, { label: 'Expenses', href: '/expenses' }, { label: 'Finance', href: '/finance' }, { label: 'Reports', href: '/reports' }]}
      />
    </AppShell>
  );
}

















