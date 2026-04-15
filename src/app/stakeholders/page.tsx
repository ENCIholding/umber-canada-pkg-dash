import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { getStakeholdersList } from "@/lib/services/stakeholders";

export default async function Page() {
  const data = await getStakeholdersList();
  const urgentTouches = data.filter((stakeholder) => stakeholder.status === "needs-followup").length;
  const waitingApprovals = data.filter((stakeholder) => stakeholder.status === "waiting").length;

  return (
    <AppShell title="Stakeholders" subtitle="builder, superintendent, architect, and internal follow-up board">
      <PageActions title="Stakeholders" />

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Active contacts</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Project-side decision makers and field contacts in play</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Urgent follow-ups</div>
          <div className="mt-2 text-3xl font-semibold">{urgentTouches}</div>
          <div className="mt-2 text-sm text-muted-foreground">Touches that can block release, install, or billing if missed</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Waiting on reply</div>
          <div className="mt-2 text-3xl font-semibold">{waitingApprovals}</div>
          <div className="mt-2 text-sm text-muted-foreground">Architect or builder approvals currently holding momentum</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        {data.map((stakeholder) => (
          <section key={stakeholder.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{stakeholder.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stakeholder.role} | {stakeholder.organization}
                </div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{stakeholder.status}</div>
            </div>

            <div className="mt-4 rounded-lg border p-3 text-sm">
              <div className="text-muted-foreground">Linked job</div>
              <div className="mt-1 font-medium">{stakeholder.projectName}</div>
            </div>

            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">
              {stakeholder.nextTouch}
            </div>
          </section>
        ))}
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Shipments', href: '/shipments' }, { label: 'Projects', href: '/projects' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/stakeholders" />
          <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[
          { label: 'Stakeholders', href: '/stakeholders' },
          { label: 'Projects', href: '/projects' },
          { label: 'Procurement', href: '/procurement' },
          { label: 'Shipments', href: '/shipments' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Shipments Module', value: '/shipments' },
          { label: 'Projects Module', value: '/projects' },
          { label: 'File Center', value: '/file-center' }
        ]}
      />
    
      <DocumentActionsBar entityName="stakeholders" />
    </AppShell>
  );
}


















