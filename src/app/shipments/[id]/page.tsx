import AppShell from "@/app/components/layout/app-shell";
import { ShipmentsForm } from "../components/form";
import { getshipmentsById } from "@/lib/services/shipments";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ShipmentsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getshipmentsById(id);
  return (
    <AppShell title="shipments detail" subtitle="View record details">
      <div className="max-w-3xl">
        <ShipmentsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


