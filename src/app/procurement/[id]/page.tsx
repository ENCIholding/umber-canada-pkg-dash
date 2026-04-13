import { AppShell } from "@/src/app/components/layout/app-shell";
import { ProcurementForm } from "../components/form";
import { getProcurementById } from "@/src/lib/services/procurement";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProcurementDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getProcurementById(id);

  return (
    <AppShell title="Procurement Detail" subtitle="View procurement record">
      <div className="max-w-3xl">
        <ProcurementForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}