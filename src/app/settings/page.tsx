import AppShell from "@/app/components/layout/app-shell";
import { DEV_AUTH } from "@/lib/auth/session";

const sections = [
  {
    title: "Company profile",
    items: [
      "Umber Canada | 8820 51 Ave, Edmonton, Alberta",
      "Directors: Pargat, Gurpreet, Kanwar",
      "Brand direction: graphite shell, restrained green accent, executive flooring ops focus"
    ]
  },
  {
    title: "Theme and UI defaults",
    items: [
      "Dark and light mode are both enabled from the live shell toggle",
      "Theme preference persists through next-themes",
      "Sidebar and command surfaces are now aligned around an internal operations OS layout"
    ]
  },
  {
    title: "Email and automation",
    items: [
      "SMTP sender identity is configured locally for Umber Canada operations",
      "Automation rules now watch release gates, receiving variances, room readiness, and billing packages",
      "Attachment-aware workflows should route through File Center and Email Center together"
    ]
  },
  {
    title: "Validation and control room backlog",
    items: [
      "Province, phone, postal code, and entity dropdown rules still need deeper global enforcement",
      "Future admin controls should manage calendar colors, upload rules, payment terms, and feature flags",
      "Role scaffolding and security hardening remain on the next pass"
    ]
  },
  {
    title: "Next real leap",
    items: [
      "Move all modules toward full relational Prisma-backed persistence instead of mixed in-memory and mock structures",
      "Apply stricter Canadian validation everywhere, especially phone, province, postal code, and business contact normalization",
      "Add stronger role permissions, richer calendar and Gantt editing, audit logs, and fuller add/edit/delete UI coverage across every entity"
    ]
  }
];

export default function SettingsPage() {
  return (
    <AppShell title="settings" subtitle="central control room for auth defaults, theme direction, ops rules, and future admin governance">
      <div className="grid gap-6">
        <section className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">Control room</h2>
          <div className="mt-2 text-sm text-muted-foreground">
            This page is the operating blueprint for defaults, guardrails, and the next layer of admin controls.
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Dev username</div>
              <div className="mt-1 font-medium">{DEV_AUTH.username}</div>
            </div>
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Dev password baseline</div>
              <div className="mt-1 font-medium">testumber</div>
            </div>
            <div className="rounded-xl border p-4 text-sm">
              <div className="text-muted-foreground">Local-first mode</div>
              <div className="mt-1 font-medium">Browser, localhost, and future LAN/cloud ready</div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <div key={item} className="rounded-xl border px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
