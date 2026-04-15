import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { automationSignals } from "@/lib/automation-data";

export default function Page() {
  const exceptions = automationSignals.filter((signal) => signal.type === "exception");
  const approvals = automationSignals.filter((signal) => signal.type === "approval");
  const followUps = automationSignals.filter((signal) => signal.type === "follow-up");
  const scheduled = automationSignals.filter((signal) => signal.type === "schedule");

  return (
    <AppShell title="Automation" subtitle="ops center for exceptions, approvals, follow-ups, and scheduled plays">
      <PageActions title="Automation / Ops Center" />

      <div className="mt-4 grid gap-4 md:grid-cols-4">
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Exceptions</div>
          <div className="mt-2 text-3xl font-semibold">{exceptions.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Late, blocked, damaged, or risky items needing immediate intervention</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Approvals</div>
          <div className="mt-2 text-3xl font-semibold">{approvals.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Release gates and sign-offs that control material movement</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Follow-ups</div>
          <div className="mt-2 text-3xl font-semibold">{followUps.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Collections, stakeholder nudges, and unresolved open loops</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Scheduled automations</div>
          <div className="mt-2 text-3xl font-semibold">{scheduled.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Recurring digests and rule-driven operating habits</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {automationSignals.map((signal) => (
          <section key={signal.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{signal.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {signal.project} | Owner: {signal.owner}
                </div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">
                {signal.urgency}
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Type</div>
                <div className="mt-1 font-medium capitalize">{signal.type}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Next best action</div>
                <div className="mt-1 font-medium">{signal.nextAction}</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">
              {signal.downstreamImpact}
            </div>
          </section>
        ))}
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Projects", href: "/projects" },
          { label: "Procurement", href: "/procurement" },
          { label: "Finance", href: "/finance" }
        ]}
      />

      <ModuleHomeLinks basePath="/automation" />

      <ConnectedWorkflowBlock
        title="Automation Coverage"
        steps={[
          { label: "Automation", href: "/automation" },
          { label: "Projects", href: "/projects" },
          { label: "Shipments", href: "/shipments" },
          { label: "Receiving", href: "/receiving" },
          { label: "Finance", href: "/finance" }
        ]}
      />

      <RelatedRecordBlock
        title="Architecture Priorities"
        items={[
          { label: "Exception engine", value: "delays, shortages, damage holds, release blockers" },
          { label: "Approval routing", value: "builder release, site readiness, billing package sign-off" },
          { label: "Scheduled plays", value: "daily digests, reminders, collections, warehouse variance reviews" },
          { label: "Project timeline", value: "procurement to install to finance exposure in one chain" }
        ]}
      />
    </AppShell>
  );
}
