import AppShell from "@/app/components/layout/app-shell";
import { ProcurementForm } from "../../components/form";
import { getProcurementById } from "@/lib/services/procurement";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProcurementPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getProcurementById(id);

  return (
    <AppShell title="Edit Procurement" subtitle="Update procurement record">
      <div className="max-w-3xl">
        <ProcurementForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


