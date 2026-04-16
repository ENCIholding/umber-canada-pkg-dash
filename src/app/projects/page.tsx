import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { DocumentActionsBar } from "@/app/components/layout/document-actions-bar";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { ConnectedWorkflowBlock } from "@/app/components/layout/connected-workflow-block";
import { getProjectsList } from "@/lib/services/projects";
import Link from "next/link";

export default async function Page() {
  const data = await getProjectsList();
  return (
    <AppShell title="projects" subtitle="job execution across flooring installs">
      <PageActions title="projects" />
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {data.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block rounded-xl border p-5 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.code}</div>
                <div className="mt-1 text-lg font-semibold">{project.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{project.builder} | {project.city}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{project.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Install window</div>
                <div className="mt-1 font-medium">{project.installWindow}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Assigned crew</div>
                <div className="mt-1 font-medium">{project.crew}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Footprint</div>
                <div className="mt-1 font-medium">{project.squareFeet?.toLocaleString()} sf</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Target margin</div>
                <div className="mt-1 font-medium">{project.marginPercent}%</div>
              </div>
              <div className="rounded-lg border p-3 text-sm sm:col-span-2">
                <div className="text-muted-foreground">Install readiness</div>
                <div className="mt-1 font-medium capitalize">{project.installReadiness}</div>
                <div className="mt-1 text-muted-foreground">{project.financeExposure}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">{project.stage}</div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">{project.nextAction}</div>
            <div className="mt-3 text-sm font-medium text-foreground/80">Open project command timeline</div>
          </Link>
        ))}
      </div>
    
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: 'Procurement', href: '/procurement' }, { label: 'Expenses', href: '/expenses' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'Reports', href: '/reports' }, { label: 'File Center', href: '/file-center' }]}
      />
    
      <ModuleHomeLinks basePath="/projects" />
    
      <ConnectedWorkflowBlock
        title="Connected Workflow"
        steps={[{ label: 'Projects', href: '/projects' }, { label: 'Procurement', href: '/procurement' }, { label: 'Expenses', href: '/expenses' }, { label: 'Deliveries', href: '/deliveries' }, { label: 'Reports', href: '/reports' }]}
      />
    
      <RelatedRecordBlock
        title="Linked Records"
        items={[
          { label: 'Procurement Module', value: '/procurement' },
          { label: 'Expenses Module', value: '/expenses' },
          { label: 'Deliveries Module', value: '/deliveries' },
          { label: 'Reports Module', value: '/reports' }
        ]}
      />
    
      <DocumentActionsBar entityName="projects" />
    </AppShell>
  );
}



















