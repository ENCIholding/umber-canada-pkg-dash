import AppShell from "@/app/components/layout/app-shell";
import { DeliveriesForm } from "../components/form";

export default function NewDeliveriesPage() {
  return (
    <AppShell title="New deliveries" subtitle="Create a new deliveries record">
      <div className="max-w-3xl">
        <DeliveriesForm mode="create" />
      </div>
    </AppShell>
  );
}













