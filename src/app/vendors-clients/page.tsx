import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getVendorsClientsList } from "@/lib/services/vendors-clients";

export default async function Page() {
  const data = await getVendorsClientsList();

  return (
    <AppShell title="Vendors & Clients" subtitle="suppliers, builders, freight, and install crews">
      <PageActions title="Vendors & Clients" />
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {data.map((partner) => (
          <section key={partner.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{partner.name}</div>
                <div className="mt-1 text-sm capitalize text-muted-foreground">{partner.type} | {partner.specialty}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{partner.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Service area</div>
                <div className="mt-1 font-medium">{partner.serviceArea}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Terms</div>
                <div className="mt-1 font-medium">{partner.creditTerms}</div>
              </div>
            </div>
          </section>
        ))}
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


















