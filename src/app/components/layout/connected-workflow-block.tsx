import React from "react";
import Link from "next/link";

interface ConnectedWorkflowBlockProps {
  title?: string;
  steps?: Array<{ label: string; href: string }>;
}

export function ConnectedWorkflowBlock({
  title = "Workflow",
  steps = []
}: ConnectedWorkflowBlockProps) {
  return (
    <section className="connected-workflow-block rounded-lg border p-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        {steps.map((step) => (
          <Link key={`${step.href}-${step.label}`} className="rounded-md border px-3 py-2" href={step.href}>
            {step.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ConnectedWorkflowBlock;







