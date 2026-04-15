import React from "react";
import Link from "next/link";

interface ConnectedAreasGridProps {
  items?: Array<{ title: string; description?: string; href: string }>;
}

export function ConnectedAreasGrid({ items = [] }: ConnectedAreasGridProps) {
  return (
    <div className="connected-areas-grid grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Link key={`${item.href}-${item.title}`} className="rounded-lg border p-4" href={item.href}>
          <div className="font-medium">{item.title}</div>
          {item.description ? <div className="mt-1 text-sm text-muted-foreground">{item.description}</div> : null}
        </Link>
      ))}
    </div>
  );
}

export default ConnectedAreasGrid;







