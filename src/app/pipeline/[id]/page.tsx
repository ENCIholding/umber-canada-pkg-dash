import { AppShell } from "@/src/app/components/layout/app-shell";
import { pipelineForm } from "../components/form";
import { getpipelineById } from "@/src/lib/services/pipeline";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PipelineDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getpipelineById(id);
  return (
    <AppShell title="pipeline detail" subtitle="View record details">
      <div className="max-w-3xl">
        <pipelineForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}