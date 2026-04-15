import AppShell from "@/app/components/layout/app-shell";
import { GanttForm } from "../../components/form";
import { getganttById } from "@/lib/services/gantt";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditGanttPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getganttById(id);
  return (
    <AppShell title="Edit gantt" subtitle="Update record">
      <div className="max-w-3xl">
        <GanttForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


