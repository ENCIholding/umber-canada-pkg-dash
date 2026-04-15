import React from "react";
import Link from "next/link";

interface DashboardSectionLinksProps {
  sections?: Array<{
    title: string;
    description?: string;
    links?: Array<{ label: string; href: string }>;
  }>;
}

export function DashboardSectionLinks({ sections = [] }: DashboardSectionLinksProps) {
  return (
    <div className="dashboard-section-links grid gap-4 lg:grid-cols-2">
      {sections.map((section) => (
        <section key={section.title} className="rounded-lg border p-4">
          <h3 className="text-sm font-semibold">{section.title}</h3>
          {section.description ? <p className="mt-1 text-sm text-muted-foreground">{section.description}</p> : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {(section.links ?? []).map((link) => (
              <Link key={`${link.href}-${link.label}`} className="rounded-md border px-3 py-2 text-sm" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default DashboardSectionLinks;







