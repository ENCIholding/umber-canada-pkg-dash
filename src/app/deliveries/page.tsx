import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { getDeliveriesList } from "@/lib/services/deliveries";

export default async function Page() {
  const data = await getDeliveriesList();
  return (
    <AppShell title="deliveries" subtitle="site drops and installer handoff">
      <PageActions title="deliveries" />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {data.map((delivery) => (
          <section key={delivery.id} className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{delivery.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{delivery.area}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{delivery.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Drop date</div>
                <div className="mt-1 font-medium">{delivery.dropDate}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Window</div>
                <div className="mt-1 font-medium">{delivery.dropWindow}</div>
              </div>
            </div>
            <div className="mt-3 text-sm">Installer: {delivery.installer}</div>
            <div className="mt-2 text-sm text-muted-foreground">{delivery.notes}</div>
          </section>
        ))}
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Shipments', href: '/shipments' }, { label: 'Projects', href: '/projects' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <ModuleHomeLinks basePath="/deliveries" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Shipments', href: '/shipments' },
          { label: 'Deliveries', href: '/deliveries' },
          { label: 'Projects', href: '/projects' },
          { label: 'Reports', href: '/reports' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Shipments Module', value: '/shipments' },
          { label: 'Projects Module', value: '/projects' },
          { label: 'Reports Module', value: '/reports' }
        ]}
      />
    
      <DocumentActionsBar entityName="deliveries" />
    </AppShell>
  );
}



















