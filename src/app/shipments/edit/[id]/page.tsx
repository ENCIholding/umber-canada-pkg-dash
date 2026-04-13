import { AppShell } from "@/src/app/components/layout/app-shell";
import { shipmentsForm } from "../../components/form";
import { getshipmentsById } from "@/src/lib/services/shipments";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditShipmentsPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getshipmentsById(id);
  return (
    <AppShell title="Edit shipments" subtitle="Update record">
      <div className="max-w-3xl">
        <shipmentsForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}