import React from "react";
import Link from "next/link";

interface RelatedLinksProps {
  title?: string;
  links?: Array<{ label: string; href: string }>;
}

export function RelatedLinks({ title = "Related links", links = [] }: RelatedLinksProps) {
  return (
    <section className="related-links rounded-lg border p-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link key={`${link.href}-${link.label}`} className="rounded-md border px-3 py-2 text-sm" href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedLinks;







