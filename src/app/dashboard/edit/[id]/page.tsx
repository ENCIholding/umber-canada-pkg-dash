import { AppShell } from "@/src/app/components/layout/app-shell";
import { dashboardForm } from "../../components/form";
import { getdashboardById } from "@/src/lib/services/dashboard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditDashboardPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdashboardById(id);
  return (
    <AppShell title="Edit dashboard" subtitle="Update record">
      <div className="max-w-3xl">
        <dashboardForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}