import { AppShell } from "@/src/app/components/layout/app-shell";
import { dashboardForm } from "../components/form";
import { getdashboardById } from "@/src/lib/services/dashboard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdashboardById(id);
  return (
    <AppShell title="dashboard detail" subtitle="View record details">
      <div className="max-w-3xl">
        <dashboardForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}