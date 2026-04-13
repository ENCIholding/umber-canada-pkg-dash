import { AppShell } from "@/src/app/components/layout/app-shell";
import { purchaseordersForm } from "../components/form";
import { getpurchaseordersById } from "@/src/lib/services/purchase-orders";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PurchaseOrdersDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getpurchaseordersById(id);
  return (
    <AppShell title="purchase-orders detail" subtitle="View record details">
      <div className="max-w-3xl">
        <purchaseordersForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}