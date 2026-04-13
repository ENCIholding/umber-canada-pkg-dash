import { AppShell } from "@/src/app/components/layout/app-shell";
import { purchaseordersForm } from "../components/form";

export default function NewPurchaseOrdersPage() {
  return (
    <AppShell title="New purchase-orders" subtitle="Create a new purchase-orders record">
      <div className="max-w-3xl">
        <purchaseordersForm mode="create" />
      </div>
    </AppShell>
  );
}