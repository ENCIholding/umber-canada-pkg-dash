import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { getAdvisorsList } from "@/lib/services/advisors";

export default async function Page() {
  const data = await getAdvisorsList();
  return (
    <AppShell title="advisors" subtitle="accounting, legal, realty, and specialist overview for operating decisions">
      <PageActions title="advisors" />
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {data.map((advisor) => (
          <section key={advisor.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{advisor.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{advisor.role} | {advisor.company}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{advisor.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Contact</div>
                <div className="mt-1 font-medium">{advisor.phone}</div>
                <div className="mt-1 text-muted-foreground">{advisor.email}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Standing</div>
                <div className="mt-1 font-medium">{advisor.rating}</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">{advisor.notes}</div>
          </section>
        ))}
      </div>
      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "Taxation", href: "/taxation" }, { label: "Compliance", href: "/compliance" }, { label: "Finance", href: "/finance" }]}
      />
      <RelatedRecordBlock
        title="Advisor Connectors"
        items={[
          { label: "Taxation", value: "Accountants and tax advisors should be linked to filing and remittance tasks" },
          { label: "Compliance", value: "Legal and document advisors support agreements, renewals, and risk controls" },
          { label: "Rentals / Realty", value: "Realtor and landlord support should tie into space and lease decisions" }
        ]}
      />
      <ModuleHomeLinks basePath="/advisors" />
    </AppShell>
  );
}
