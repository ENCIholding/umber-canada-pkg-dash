import { AppShell } from "@/src/app/components/layout/app-shell";
import { ganttForm } from "../../components/form";
import { getganttById } from "@/src/lib/services/gantt";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditGanttPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getganttById(id);
  return (
    <AppShell title="Edit gantt" subtitle="Update record">
      <div className="max-w-3xl">
        <ganttForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}