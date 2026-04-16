import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { getPipelineList } from "@/lib/services/pipeline";

export default async function Page() {
  const data = await getPipelineList();
  return (
    <AppShell title="pipeline" subtitle="future jobs, lead movement, and preconstruction follow-up">
      <PageActions title="pipeline" />
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        {data.map((record) => (
          <section key={record.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{record.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{record.company}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{record.status}</div>
            </div>
            <div className="mt-4 rounded-lg border p-3 text-sm">
              <div className="text-muted-foreground">Estimated value / probability</div>
              <div className="mt-1 font-medium">{record.estimatedValue} | {record.probability}</div>
            </div>
            <div className="mt-3 rounded-lg border p-3 text-sm">
              <div className="text-muted-foreground">Next step</div>
              <div className="mt-1">{record.nextStep}</div>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Follow up {record.followUpDate} | Source: {record.source}</div>
          </section>
        ))}
      </div>
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Projects", href: "/projects" }, { label: "Reports", href: "/reports" }, { label: "Email", href: "/email" }]}
      />
      <RelatedRecordBlock
        title="Pipeline Connectors"
        items={[
          { label: "Projects", value: "Won opportunities should convert into full project records with linked timelines" },
          { label: "Email", value: "Use drafting and follow-up flows to chase prospects without losing context" },
          { label: "Reports", value: "Forecast values should flow into pipeline and revenue outlook reporting" }
        ]}
      />
      <ModuleHomeLinks basePath="/pipeline" />
    </AppShell>
  );
}
