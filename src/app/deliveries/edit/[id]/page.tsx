import { AppShell } from "@/src/app/components/layout/app-shell";
import { deliveriesForm } from "../../components/form";
import { getdeliveriesById } from "@/src/lib/services/deliveries";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditDeliveriesPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdeliveriesById(id);
  return (
    <AppShell title="Edit deliveries" subtitle="Update record">
      <div className="max-w-3xl">
        <deliveriesForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}