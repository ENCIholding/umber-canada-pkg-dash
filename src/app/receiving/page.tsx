import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { getReceivingList } from "@/lib/services/receiving";

export default async function Page() {
  const data = await getReceivingList();
  return (
    <AppShell title="receiving" subtitle="yard, warehouse, and variance control">
      <PageActions title="receiving" />
      <div className="mt-4 overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-accent/30 text-left">
            <tr>
              <th className="px-4 py-3">Load</th>
              <th className="px-4 py-3">Warehouse</th>
              <th className="px-4 py-3">Received</th>
              <th className="px-4 py-3">Condition</th>
              <th className="px-4 py-3">Variance</th>
              <th className="px-4 py-3">Put-away</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="px-4 py-3 font-medium">{row.name}</td>
                <td className="px-4 py-3">{row.warehouse}</td>
                <td className="px-4 py-3">{row.receivedDate}</td>
                <td className="px-4 py-3">{row.condition}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.variance}</td>
                <td className="px-4 py-3">{row.putAwayZone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Shipments', href: '/shipments' }, { label: 'Procurement', href: '/procurement' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/receiving" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Procurement', href: '/procurement' },
          { label: 'Shipments', href: '/shipments' },
          { label: 'Receiving', href: '/receiving' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Shipments Module', value: '/shipments' },
          { label: 'File Center', value: '/file-center' }
        ]}
      />
    </AppShell>
  );
}



















