import Link from "next/link";
import AppShell from "@/app/components/layout/app-shell";
import { getProjectsById } from "@/lib/services/projects";
import {
  getDeliveriesForProject,
  getDocumentsForProject,
  getInstallPhasesForProject,
  getProjectTimeline,
  getReceivingForProject,
  getRoomAreasForProject,
  getShipmentsForProject,
  getStakeholdersForProject
} from "@/lib/flooring-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

const stageTone: Record<string, string> = {
  procurement: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  shipment: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  receiving: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  delivery: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
  install: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  finance: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
  stakeholder: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300"
};

export default async function ProjectsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectsById(id);

  if (!project) {
    return (
      <AppShell title="project not found" subtitle="the requested job could not be located">
        <div className="rounded-2xl border p-6">
          <div className="text-lg font-semibold">This flooring project is unavailable.</div>
          <div className="mt-2 text-sm text-muted-foreground">Check the project list or create a new linked job record.</div>
          <Link href="/projects" className="mt-4 inline-flex rounded-md border px-4 py-2 text-sm font-medium">
            Back to projects
          </Link>
        </div>
      </AppShell>
    );
  }

  const timeline = getProjectTimeline(id);
  const rooms = getRoomAreasForProject(id);
  const phases = getInstallPhasesForProject(id);
  const shipments = getShipmentsForProject(id);
  const receiving = getReceivingForProject(id);
  const deliveries = getDeliveriesForProject(id);
  const stakeholders = getStakeholdersForProject(id);
  const documents = getDocumentsForProject(id);

  return (
    <AppShell title={project.name} subtitle="project command timeline tying procurement, logistics, install, finance, files, and follow-ups together">
      <div className="grid gap-6">
        <section className="rounded-2xl border p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.code}</div>
              <h2 className="mt-2 text-3xl font-semibold">{project.name}</h2>
              <div className="mt-2 text-sm text-muted-foreground">
                {project.builder} | {project.site}, {project.city}, {project.province}
              </div>
            </div>
            <div className="rounded-full border px-4 py-2 text-xs font-semibold uppercase">{project.status}</div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Install window</div>
              <div className="mt-1 font-medium">{project.installWindow}</div>
            </div>
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Crew</div>
              <div className="mt-1 font-medium">{project.crew}</div>
            </div>
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Footprint</div>
              <div className="mt-1 font-medium">{project.squareFeet?.toLocaleString()} sf</div>
            </div>
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Install readiness</div>
              <div className="mt-1 font-medium capitalize">{project.installReadiness}</div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl bg-accent/30 p-4 text-sm">
              <div className="text-muted-foreground">Next best action</div>
              <div className="mt-1 font-medium">{project.nextAction}</div>
              <div className="mt-2 text-muted-foreground">{project.stage}</div>
            </div>
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Finance exposure</div>
              <div className="mt-1 font-medium">{project.financeExposure}</div>
              <div className="mt-2 text-muted-foreground">
                Started {project.startDate} | target close {project.estimatedCompletionDate}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">Unified project timeline</h3>
              <p className="mt-1 text-sm text-muted-foreground">One chain from PO to shipment to receiving to install to billing.</p>
            </div>
            <Link href="/gantt" className="rounded-md border px-4 py-2 text-sm font-medium">
              Open Gantt
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {timeline.map((event) => (
              <div key={event.id} className="grid gap-3 rounded-xl border p-4 lg:grid-cols-[140px_1fr_180px]">
                <div className="text-sm font-medium">{event.date}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase ${stageTone[event.stage] ?? "bg-accent/40"}`}>
                      {event.stage}
                    </span>
                    <span className="font-medium">{event.title}</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{event.detail}</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">{event.owner}</div>
                  <div className="mt-1 capitalize text-muted-foreground">{event.status}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Room and area command board</h3>
            <div className="mt-4 grid gap-3">
              {rooms.map((room) => (
                <div key={room.id} className="rounded-xl border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium">{room.name}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{room.level} | {room.material}</div>
                    </div>
                    <div className="text-right text-sm">
                      <div>{room.squareFeet.toLocaleString()} sf</div>
                      <div className="mt-1 capitalize text-muted-foreground">{room.installPhase}</div>
                    </div>
                  </div>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg bg-accent/30 px-3 py-2 text-sm">
                      Prep status: <span className="font-medium capitalize">{room.prepStatus}</span>
                    </div>
                    <div className="rounded-lg border px-3 py-2 text-sm">{room.nextAction}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Install phases</h3>
            <div className="mt-4 space-y-3">
              {phases.map((phase) => (
                <div key={phase.id} className="rounded-xl border p-4 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium">{phase.label}</div>
                      <div className="mt-1 text-muted-foreground">{phase.owner}</div>
                    </div>
                    <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{phase.status}</div>
                  </div>
                  <div className="mt-3 text-muted-foreground">{phase.start} to {phase.end}</div>
                  {phase.dependency ? <div className="mt-2 text-muted-foreground">Depends on: {phase.dependency}</div> : null}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <section className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Linked logistics</h3>
            <div className="mt-4 space-y-3 text-sm">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="rounded-xl border p-4">
                  <div className="font-medium">{shipment.loadNumber}</div>
                  <div className="mt-1 text-muted-foreground">{shipment.status} | ETA {shipment.eta}</div>
                  <div className="mt-2">{shipment.risk}</div>
                </div>
              ))}
              {receiving.map((entry) => (
                <div key={entry.id} className="rounded-xl border p-4">
                  <div className="font-medium">{entry.warehouse}</div>
                  <div className="mt-1 text-muted-foreground">{entry.condition} | {entry.receivedDate}</div>
                  <div className="mt-2">{entry.variance}</div>
                </div>
              ))}
              {deliveries.map((delivery) => (
                <div key={delivery.id} className="rounded-xl border p-4">
                  <div className="font-medium">{delivery.area}</div>
                  <div className="mt-1 text-muted-foreground">{delivery.dropDate} | {delivery.dropWindow}</div>
                  <div className="mt-2">{delivery.notes}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Automation + stakeholders</h3>
            <div className="mt-4 space-y-3 text-sm">
              {stakeholders.map((stakeholder) => (
                <div key={stakeholder.id} className="rounded-xl border p-4">
                  <div className="font-medium">{stakeholder.name}</div>
                  <div className="mt-1 text-muted-foreground">{stakeholder.role} | {stakeholder.organization}</div>
                  <div className="mt-2">{stakeholder.nextTouch}</div>
                </div>
              ))}
              <div className="rounded-xl bg-accent/30 p-4">
                <div className="font-medium">Recommended rules</div>
                <div className="mt-2 text-muted-foreground">Auto-chase missing access approvals, builder release gates, receiving variances, and final billing nudges from this timeline.</div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">Documents and outbound actions</h3>
            <div className="mt-4 space-y-3 text-sm">
              {documents.map((document) => (
                <div key={document.id} className="rounded-xl border p-4">
                  <div className="font-medium">{document.title}</div>
                  <div className="mt-1 text-muted-foreground">{document.category} | {document.status}</div>
                  <div className="mt-2">{document.action}</div>
                </div>
              ))}
              <div className="rounded-xl border p-4">
                <div className="font-medium">Linked operating moves</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Link href="/file-center" className="rounded-md border px-3 py-2">Open file center</Link>
                  <Link href="/email" className="rounded-md border px-3 py-2">Open email center</Link>
                  <Link href="/automation" className="rounded-md border px-3 py-2">Open ops center</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
