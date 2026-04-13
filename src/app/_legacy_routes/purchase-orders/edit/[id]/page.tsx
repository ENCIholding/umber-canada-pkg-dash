import { AppShell } from "@/src/app/components/layout/app-shell";
import { purchaseordersForm } from "../../components/form";
import { getpurchaseordersById } from "@/src/lib/services/purchase-orders";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPurchaseOrdersPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getpurchaseordersById(id);
  return (
    <AppShell title="Edit purchase-orders" subtitle="Update record">
      <div className="max-w-3xl">
        <purchaseordersForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}