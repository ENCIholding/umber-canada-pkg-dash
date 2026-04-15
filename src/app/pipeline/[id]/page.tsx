import AppShell from "@/app/components/layout/app-shell";
import { PipelineForm } from "../components/form";
import { getpipelineById } from "@/lib/services/pipeline";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PipelineDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getpipelineById(id);
  return (
    <AppShell title="pipeline detail" subtitle="View record details">
      <div className="max-w-3xl">
        <PipelineForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


