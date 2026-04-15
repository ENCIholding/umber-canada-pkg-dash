import AppShell from "@/app/components/layout/app-shell";
import { DeliveriesForm } from "../components/form";
import { getdeliveriesById } from "@/lib/services/deliveries";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DeliveriesDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdeliveriesById(id);
  return (
    <AppShell title="deliveries detail" subtitle="View record details">
      <div className="max-w-3xl">
        <DeliveriesForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


