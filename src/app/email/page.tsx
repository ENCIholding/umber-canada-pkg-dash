import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { EmailExportQuickActions } from "@/app/components/layout/email-export-quick-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getEmailList } from "@/lib/services/email";

export default async function Page() {
  const data = await getEmailList();
  return (
    <AppShell title="Email" subtitle="outbound follow-through for releases, collections, and job coordination">
      <PageActions title="Email" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Queued plays</div>
          <div className="mt-2 text-3xl font-semibold">{data.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Operational emails tied to real downstream movement</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Delivery mode</div>
          <div className="mt-2 text-lg font-semibold">SMTP or safe local fallback</div>
          <div className="mt-2 text-sm text-muted-foreground">If SMTP isn&apos;t configured yet, the app logs outgoing mail instead of crashing</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Automation opportunity</div>
          <div className="mt-2 text-lg font-semibold">Triggered nudges</div>
          <div className="mt-2 text-sm text-muted-foreground">Use rules to fire release reminders, AP follow-ups, and shipment alerts automatically</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {data.map((message) => (
          <section key={message.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{message.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Owner: {message.owner} | Urgency: {message.urgency}
                </div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{message.status}</div>
            </div>
            <div className="mt-4 rounded-lg border p-3 text-sm">
              <div className="text-muted-foreground">Next best action</div>
              <div className="mt-1 font-medium">{message.nextAction}</div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">
              {message.downstreamImpact}
            </div>
          </section>
        ))}
      </div>
    
      <ModuleHomeLinks basePath="/email" />
    
      <EmailExportQuickActions module="email" subject="Email Actions" />
          <DocumentActionsBar entityName="email" />
          <RelatedLinks
        title="Connected Areas"
        links={[
          { label: 'Reports', href: '/reports' },
          { label: 'File Center', href: '/file-center' },
          { label: 'Finance', href: '/finance' },
          { label: 'Automation', href: '/automation' }
        ]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Reports Module', value: '/reports' },
          { label: 'File Center', value: '/file-center' },
          { label: 'Finance Module', value: '/finance' },
          { label: 'Automation Center', value: '/automation' }
        ]}
      />
    </AppShell>
  );
}





















