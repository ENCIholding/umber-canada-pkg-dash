import React from "react";

interface RelatedRecordBlockProps {
  title?: string;
  items?: Array<{ label: string; value: string }>;
}

export function RelatedRecordBlock({ title = "Related records", items = [] }: RelatedRecordBlockProps) {
  return (
    <section className="related-record-block rounded-lg border p-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {items.map((item) => (
          <div key={`${item.label}-${item.value}`} className="rounded-md border px-3 py-2 text-sm">
            <div className="font-medium">{item.label}</div>
            <div className="text-muted-foreground">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedRecordBlock;







