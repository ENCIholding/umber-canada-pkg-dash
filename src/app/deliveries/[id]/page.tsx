import { AppShell } from "@/src/app/components/layout/app-shell";
import { deliveriesForm } from "../components/form";
import { getdeliveriesById } from "@/src/lib/services/deliveries";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DeliveriesDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getdeliveriesById(id);
  return (
    <AppShell title="deliveries detail" subtitle="View record details">
      <div className="max-w-3xl">
        <deliveriesForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}