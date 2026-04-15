import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getMasterDbList } from "@/lib/services/master-db";

export default async function Page() {
  const data = await getMasterDbList();

  const totalInventoryValue = data.reduce((sum, item) => sum + item.amount, 0);
  const livePackages = data.filter((item) => item.status !== "received").length;

  return (
    <AppShell title="Master DB" subtitle="material packages, sourcing, and inbound control">
      <PageActions title="Master DB" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Tracked packages</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Material packages linked to active flooring jobs</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Inbound exposure</div>
          <div className="mt-2 text-3xl font-semibold">{livePackages}</div>
          <div className="mt-2 text-sm text-muted-foreground">Packages still ordered, partial, or awaiting receiving</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Inventory value</div>
          <div className="mt-2 text-3xl font-semibold">${totalInventoryValue.toLocaleString()}</div>
          <div className="mt-2 text-sm text-muted-foreground">Committed value flowing through the current pipeline</div>
        </section>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border">
        <table className="min-w-full divide-y">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Material package</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Supplier</th>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">Expected</th>
              <th className="px-4 py-3">Value</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {data.map((item) => (
              <tr key={item.id} className="align-top">
                <td className="px-4 py-4">
                  <div className="font-medium">{item.name}</div>
                  <div className="mt-1 text-muted-foreground">{item.quantity} to {item.destination}</div>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{item.category}</td>
                <td className="px-4 py-4 text-muted-foreground">{item.supplier}</td>
                <td className="px-4 py-4">{item.projectCode}</td>
                <td className="px-4 py-4">{item.expectedDate}</td>
                <td className="px-4 py-4">${item.amount.toLocaleString()}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[
          { label: "Procurement", href: "/procurement" },
          { label: "Receiving", href: "/receiving" },
          { label: "Shipments", href: "/shipments" },
          { label: "Projects", href: "/projects" }
        ]}
      />

      <ModuleHomeLinks basePath="/master-db" />

      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: "Master DB", href: "/master-db" },
          { label: "Procurement", href: "/procurement" },
          { label: "Shipments", href: "/shipments" },
          { label: "Receiving", href: "/receiving" }
        ]}
      />

      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: "Procurement Module", value: "/procurement" },
          { label: "Receiving Module", value: "/receiving" },
          { label: "Shipments Module", value: "/shipments" },
          { label: "Projects Module", value: "/projects" }
        ]}
      />

      <DocumentActionsBar entityName="master-db" />
    </AppShell>
  );
}
