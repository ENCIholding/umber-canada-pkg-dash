import AppShell from "@/app/components/layout/app-shell";
import { ReportsForm } from "../components/form";
import { getReportsById } from "@/lib/services/reports";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReportsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getReportsById(id);

  return (
    <AppShell title="Report Detail" subtitle="View report record">
      <div className="max-w-3xl">
        <ReportsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


