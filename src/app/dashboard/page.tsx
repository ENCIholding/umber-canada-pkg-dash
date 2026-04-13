import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { EmailExportQuickActions } from "@/src/app/components/layout/email-export-quick-actions";
import { DocumentActionsBar } from "@/src/app/components/layout/document-actions-bar";
import { ConnectedWorkflowBlock } from "@/src/app/components/layout/connected-workflow-block";
import { RelatedRecordBlock } from "@/src/app/components/layout/related-record-block";
import { DashboardSectionLinks } from "@/src/app/components/layout/dashboard-section-links";
import { DashboardStatCards } from "@/src/app/components/layout/dashboard-stat-cards";
import { RelatedLinks } from "@/src/app/components/layout/related-links";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getDashboardList } from "@/src/lib/services/dashboard";

export default async function Page() {
  const data = await getDashboardList();
  return (
    <AppShell title="dashboard" subtitle="dashboard overview">
      <PageActions title="dashboard" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
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
        cards={[
          { label: 'Procurement Records', value: '2', helper: 'Skeleton connected' },
          { label: 'Shipments Active', value: '2', helper: 'Linked with receiving flow' },
          { label: 'Payments In/Out', value: '4', helper: 'Finance layer connected' },
          { label: 'Reports / Files', value: '2', helper: 'Support layer active' }
        ]}
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
        title="Linked Records"
        items={[
          { label: 'Projects Module', value: '/projects' },
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Finance Module', value: '/finance' },
          { label: 'Reports Module', value: '/reports' }
        ]}
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
        <h3 className="text-sm font-semibold">Recent Operational Paths</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-md border p-3 text-sm">Procurement ? Shipments</div>
          <div className="rounded-md border p-3 text-sm">Receiving ? Deliveries</div>
          <div className="rounded-md border p-3 text-sm">Finance ? Reports</div>
          <div className="rounded-md border p-3 text-sm">Files ? Email</div>
        </div>
      </div>
    </AppShell>
  );
}
















