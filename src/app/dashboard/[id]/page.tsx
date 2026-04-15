import AppShell from "@/app/components/layout/app-shell";
import { DashboardForm } from "../components/form";
import { getdashboardById } from "@/lib/services/dashboard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdashboardById(id);
  return (
    <AppShell title="dashboard detail" subtitle="View record details">
      <div className="max-w-3xl">
        <DashboardForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


