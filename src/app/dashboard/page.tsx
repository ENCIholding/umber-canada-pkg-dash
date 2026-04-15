import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { EmailExportQuickActions } from "@/app/components/layout/email-export-quick-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { DashboardSectionLinks } from "@/app/components/layout/dashboard-section-links";
import { DashboardStatCards } from "@/app/components/layout/dashboard-stat-cards";
import { ConnectedAreasGrid } from "@/app/components/layout/connected-areas-grid";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getDashboardList } from "@/lib/services/dashboard";
import {
  flooringDeliveries,
  flooringProjects,
  flooringPurchaseOrders,
  flooringReceiving,
  flooringShipments,
  flooringStakeholders
} from "@/lib/flooring-data";

export default async function Page() {
  const data = await getDashboardList();
  const activeProjects = flooringProjects.filter((project) => project.status !== "closed");
  const installWindow = activeProjects
    .filter((project) => project.status === "installing" || project.status === "material-ready")
    .map((project) => ({
      name: project.name,
      window: project.installWindow,
      action: project.nextAction
    }));
  return (
    <AppShell title="dashboard" subtitle="flooring operations control room">
      <PageActions title="dashboard" />
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">Today&apos;s flooring pulse</div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {activeProjects.slice(0, 4).map((project) => (
              <div key={project.id} className="rounded-lg border p-4">
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.code}</div>
                <div className="mt-1 text-base font-semibold">{project.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{project.stage}</div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span>{project.squareFeet.toLocaleString()} sf</span>
                  <span>{project.marginPercent}% margin</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{project.nextAction}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border p-5">
          <div className="text-sm font-semibold">Immediate attention</div>
          <div className="mt-3 space-y-3">
            <div className="rounded-lg border p-4 text-sm">
              <div className="font-medium">Loads at risk</div>
              <div className="mt-1 text-muted-foreground">
                {flooringShipments.filter((shipment) => shipment.risk).length} shipment records need coordination on access, release, or delivery timing.
              </div>
            </div>
            <div className="rounded-lg border p-4 text-sm">
              <div className="font-medium">Receiving exceptions</div>
              <div className="mt-1 text-muted-foreground">
                {flooringReceiving.filter((entry) => entry.condition !== "clear").length} warehouse entries need variance or damage follow-up.
              </div>
            </div>
            <div className="rounded-lg border p-4 text-sm">
              <div className="font-medium">Stakeholder follow-ups</div>
              <div className="mt-1 text-muted-foreground">
                {flooringStakeholders.filter((stakeholder) => stakeholder.status !== "active").length} contacts are waiting on approval, release, or spec clarification.
              </div>
            </div>
          </div>
        </section>
      </div>
    
      <ModuleHomeLinks basePath="/dashboard" />
    
      <ConnectedAreasGrid
        items={[
          { title: 'Run Procurement Flow', description: 'Vendor to PO to shipment to delivery.', href: '/procurement' },
          { title: 'Review Finance Flow', description: 'Payments, expenses, rentals, and reports.', href: '/finance' },
          { title: 'Open CRM Layer', description: 'Vendors, clients, stakeholders, and advisors.', href: '/vendors-clients' },
          { title: 'Open Support Layer', description: 'Compliance, files, reports, and email.', href: '/compliance' },
          { title: 'Open Projects', description: 'Project-level operating view.', href: '/projects' },
          { title: 'Open Reports', description: 'Reporting and export workflows.', href: '/reports' }
        ]}
      />
          <RelatedLinks
        title="Priority System Paths"
        links={[
          { label: 'Go to Procurement', href: '/procurement' },
          { label: 'Go to Finance', href: '/finance' },
          { label: 'Go to Projects', href: '/projects' },
          { label: 'Go to Reports', href: '/reports' }
        ]}
      />
      <DashboardStatCards
        cards={data.map((item) => ({
          label: item.name,
          value: item.status ?? "-",
          helper: item.helper
        }))}
      />
          <DashboardSectionLinks
        sections={[
          {
            title: 'Operations',
            description: 'Move through procurement, logistics, projects, and fulfillment.',
            links: [
              { label: 'Procurement', href: '/procurement' },
              { label: 'Shipments', href: '/shipments' },
              { label: 'Receiving', href: '/receiving' },
              { label: 'Deliveries', href: '/deliveries' },
              { label: 'Projects', href: '/projects' },
              { label: 'Gantt', href: '/gantt' }
            ]
          },
          {
            title: 'Finance',
            description: 'Track outgoing, incoming, expenses, rentals, and summaries.',
            links: [
              { label: 'Finance', href: '/finance' },
              { label: 'Payments Sent', href: '/payments-sent' },
              { label: 'Payments Received', href: '/payments-received' },
              { label: 'Expenses', href: '/expenses' },
              { label: 'Rentals', href: '/rentals' },
              { label: 'Taxation', href: '/taxation' }
            ]
          }
        ]}
      />
    
      <RelatedRecordBlock
        title="Install Window Tracker"
        items={installWindow.map((item) => ({
          label: item.name,
          value: `${item.window} | ${item.action}`
        }))}
      />
    
      <ConnectedWorkflowBlock
        title="Dashboard Workflow"
        steps={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Procurement', href: '/procurement' },
          { label: 'Finance', href: '/finance' },
          { label: 'Reports', href: '/reports' }
        ]}
      />
    
      <DocumentActionsBar entityName="dashboard" />
    
      <EmailExportQuickActions module="dashboard" subject="Dashboard Actions" />
    
      <div className="mt-6 rounded-lg border p-4">
        <h3 className="text-sm font-semibold">Critical chain</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-md border p-3 text-sm">{flooringPurchaseOrders.length} purchase orders feeding installs</div>
          <div className="rounded-md border p-3 text-sm">{flooringShipments.length} active or staged loads</div>
          <div className="rounded-md border p-3 text-sm">{flooringDeliveries.length} site drops scheduled</div>
          <div className="rounded-md border p-3 text-sm">{flooringStakeholders.length} key contacts mapped to jobs</div>
        </div>
      </div>
    </AppShell>
  );
}





















