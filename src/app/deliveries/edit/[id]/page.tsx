import AppShell from "@/app/components/layout/app-shell";
import { DeliveriesForm } from "../../components/form";
import { getdeliveriesById } from "@/lib/services/deliveries";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditDeliveriesPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdeliveriesById(id);
  return (
    <AppShell title="Edit deliveries" subtitle="Update record">
      <div className="max-w-3xl">
        <DeliveriesForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


