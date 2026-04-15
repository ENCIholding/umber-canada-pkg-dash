import AppShell from "@/app/components/layout/app-shell";
import { ReportsForm } from "../../components/form";
import { getReportsById } from "@/lib/services/reports";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditReportsPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getReportsById(id);

  return (
    <AppShell title="Edit Report" subtitle="Update report record">
      <div className="max-w-3xl">
        <ReportsForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


