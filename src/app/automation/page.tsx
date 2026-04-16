import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import {
  getAutomationCoverageSummary,
  getAutomationRules,
  getAutomationSignals
} from "@/lib/automation-data";

export default function Page() {
  const automationSignals = getAutomationSignals();
  const rules = getAutomationRules();
  const coverage = getAutomationCoverageSummary();
  const exceptions = automationSignals.filter((signal) => signal.type === "exception");
  const approvals = automationSignals.filter((signal) => signal.type === "approval");
  const followUps = automationSignals.filter((signal) => signal.type === "follow-up");
  const scheduled = automationSignals.filter((signal) => signal.type === "schedule");

  return (
    <AppShell title="Automation" subtitle="rule-driven ops center for exceptions, approvals, follow-ups, and scheduled plays">
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
          <div className="mt-2 text-sm text-muted-foreground">Release gates and sign-offs controlling material movement</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Follow-ups</div>
          <div className="mt-2 text-3xl font-semibold">{followUps.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Collections, stakeholder nudges, and unresolved open loops</div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm text-muted-foreground">Scheduled automations</div>
          <div className="mt-2 text-3xl font-semibold">{scheduled.length}</div>
          <div className="mt-2 text-sm text-muted-foreground">Recurring digests and ops habits with attachment and rule context</div>
        </section>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-xl border p-5">
          <div className="text-lg font-semibold">Active signal board</div>
          <div className="mt-4 grid gap-4">
            {automationSignals.map((signal) => (
              <section key={signal.id} className="rounded-xl border p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{signal.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {signal.project} | Owner: {signal.owner} | Module: {signal.module}
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
                    <div className="text-muted-foreground">Trigger</div>
                    <div className="mt-1 font-medium">{signal.trigger}</div>
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">
                  <div className="font-medium">Next best action</div>
                  <div className="mt-1">{signal.nextAction}</div>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{signal.downstreamImpact}</div>
              </section>
            ))}
          </div>
        </section>

        <div className="grid gap-4">
          <section className="rounded-xl border p-5">
            <div className="text-lg font-semibold">Rule engine coverage</div>
            <div className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-lg border p-4 text-sm">
                <div className="text-muted-foreground">Projects with blocked rooms</div>
                <div className="mt-1 text-2xl font-semibold">{coverage.blockedRooms}</div>
              </div>
              <div className="rounded-lg border p-4 text-sm">
                <div className="text-muted-foreground">Blocked install phases</div>
                <div className="mt-1 text-2xl font-semibold">{coverage.blockedPhases}</div>
              </div>
              <div className="rounded-lg border p-4 text-sm">
                <div className="text-muted-foreground">Missing required attachments</div>
                <div className="mt-1 text-2xl font-semibold">{coverage.missingDocuments}</div>
              </div>
            </div>
          </section>

          <section className="rounded-xl border p-5">
            <div className="text-lg font-semibold">Rule library</div>
            <div className="mt-4 space-y-3">
              {rules.map((rule) => (
                <div key={rule.id} className="rounded-lg border p-4 text-sm">
                  <div className="font-medium">{rule.name}</div>
                  <div className="mt-1 text-muted-foreground">{rule.cadence} | {rule.scope}</div>
                  <div className="mt-2">{rule.effect}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Projects", href: "/projects" },
          { label: "File Center", href: "/file-center" },
          { label: "Email", href: "/email" }
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
        title="Automation Design Principles"
        items={[
          { label: "Architecture", value: "event-driven rules reading project, room, shipment, receiving, document, and finance states" },
          { label: "Navigation", value: "ops center exists as a first-class command module instead of hidden background logic" },
          { label: "UI", value: "every signal shows trigger, owner, next move, and downstream impact" },
          { label: "Cross-tab linkage", value: "projects, file center, email, and finance can all be driven from the same signal board" }
        ]}
      />
    </AppShell>
  );
}
