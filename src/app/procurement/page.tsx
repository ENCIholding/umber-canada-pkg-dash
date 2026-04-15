import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getProcurementList } from "@/lib/services/procurement";

export default async function Page() {
  const data = await getProcurementList();

  return (
    <AppShell title="Procurement" subtitle="material buying and release control">
      <PageActions title="Procurement" />
      <div className="mt-4 overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-accent/30 text-left">
            <tr>
              <th className="px-4 py-3">PO</th>
              <th className="px-4 py-3">Vendor</th>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">Expected</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t align-top">
                <td className="px-4 py-3 font-medium">{row.poNumber}</td>
                <td className="px-4 py-3">{row.vendorName}</td>
                <td className="px-4 py-3">{row.projectName}</td>
                <td className="px-4 py-3">{row.expectedDate}</td>
                <td className="px-4 py-3">{row.totalAmount}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Projects', href: '/projects' }, { label: 'Shipments', href: '/shipments' }, { label: 'Payments Sent', href: '/payments-sent' }]}
      />
    
      <ModuleHomeLinks basePath="/procurement" />
    
      <RelatedRecordBlock
        title="Linked Module Paths"
        items={[{ label: 'Vendor Module', value: '/vendors-clients' }, { label: 'Project Module', value: '/projects' }, { label: 'Shipment Module', value: '/shipments' }]}
      />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Vendors & Clients', href: '/vendors-clients' }, { label: 'Procurement', href: '/procurement' }, { label: 'Shipments', href: '/shipments' }, { label: 'Receiving', href: '/receiving' }, { label: 'Deliveries', href: '/deliveries' }]}
      />
    </AppShell>
  );
}


















