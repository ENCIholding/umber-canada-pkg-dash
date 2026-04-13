import { AppShell } from "@/src/app/components/layout/app-shell";
import { shipmentsForm } from "../components/form";
import { getshipmentsById } from "@/src/lib/services/shipments";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ShipmentsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getshipmentsById(id);
  return (
    <AppShell title="shipments detail" subtitle="View record details">
      <div className="max-w-3xl">
        <shipmentsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}