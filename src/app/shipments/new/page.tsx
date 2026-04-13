import { AppShell } from "@/src/app/components/layout/app-shell";
import { shipmentsForm } from "../components/form";

export default function NewShipmentsPage() {
  return (
    <AppShell title="New shipments" subtitle="Create a new shipments record">
      <div className="max-w-3xl">
        <ShipmentsForm mode="create" />
      </div>
    </AppShell>
  );
}








