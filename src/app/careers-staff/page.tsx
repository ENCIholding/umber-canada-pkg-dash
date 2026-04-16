import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { RelatedLinks } from "@/app/components/layout/related-links";
import { RelatedRecordBlock } from "@/app/components/layout/related-record-block";
import { getStaffList } from "@/lib/services/careers-staff";

export default async function Page() {
  const data = await getStaffList();

  return (
    <AppShell title="Staff & Careers" subtitle="team operations, hiring visibility, and document readiness">
      <PageActions title="Staff" />
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {data.map((person) => (
          <section key={person.id} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{person.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{person.role} | {person.department}</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{person.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Contact</div>
                <div className="mt-1 font-medium">{person.phone}</div>
                <div className="mt-1 text-muted-foreground">{person.email}</div>
              </div>
              <div className="rounded-lg border p-3 text-sm">
                <div className="text-muted-foreground">Employment</div>
                <div className="mt-1 font-medium">{person.hireDate}</div>
                <div className="mt-1 text-muted-foreground">{person.wageBand}</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg border p-3 text-sm">
              <div className="text-muted-foreground">Document readiness</div>
              <div className="mt-1 font-medium">{person.documentStatus}</div>
            </div>
            <div className="mt-3 rounded-lg bg-accent/30 px-4 py-3 text-sm">{person.notes}</div>
          </section>
        ))}
      </div>

      <RelatedLinks
        title="Connected Areas"
        links={[{ label: "File Center", href: "/file-center" }, { label: "Compliance", href: "/compliance" }, { label: "Reports", href: "/reports" }]}
      />
      <RelatedRecordBlock
        title="Staff Connectors"
        items={[
          { label: "File Center", value: "Resumes, certifications, and onboarding files should stay linked to staff records" },
          { label: "Compliance", value: "Training and document expiry should surface through compliance and automation" },
          { label: "Reports", value: "Future payroll and staffing reports should grow from this directory" }
        ]}
      />
      <ModuleHomeLinks basePath="/careers-staff" />
    </AppShell>
  );
}
