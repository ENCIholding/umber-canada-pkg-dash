import AppShell from "@/app/components/layout/app-shell";
import { GanttForm } from "../components/form";
import { getganttById } from "@/lib/services/gantt";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GanttDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getganttById(id);
  return (
    <AppShell title="gantt detail" subtitle="View record details">
      <div className="max-w-3xl">
        <GanttForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


