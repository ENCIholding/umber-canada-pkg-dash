import { AppShell } from "@/src/app/components/layout/app-shell";
import { ganttForm } from "../components/form";
import { getganttById } from "@/src/lib/services/gantt";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GanttDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getganttById(id);
  return (
    <AppShell title="gantt detail" subtitle="View record details">
      <div className="max-w-3xl">
        <ganttForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}