import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getShipmentsList } from "@/lib/services/shipments";

export default async function Page() {
  const data = await getShipmentsList();
  return (
    <AppShell title="shipments" subtitle="carrier loads and site release timing">
      <PageActions title="shipments" />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {data.map((shipment) => (
          <section key={shipment.id} className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{shipment.loadNumber}</div>
                <div className="mt-1 text-lg font-semibold">{shipment.name}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{shipment.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">ETA</div>
                <div className="mt-1 font-medium">{shipment.eta}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Destination</div>
                <div className="mt-1 font-medium">{shipment.destination}</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">{shipment.risk}</div>
          </section>
        ))}
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Receiving', href: '/receiving' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'Projects', href: '/projects' }]}
      />
    
      <ModuleHomeLinks basePath="/shipments" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Procurement Module', value: '/procurement' }, { label: 'Receiving Module', value: '/receiving' }, { label: 'Deliveries Module', value: '/deliveries' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Procurement', href: '/procurement' }, { label: 'Shipments', href: '/shipments' }, { label: 'Receiving', href: '/receiving' }, { label: 'Deliveries', href: '/deliveries' }]}
      />
    </AppShell>
  );
}



















