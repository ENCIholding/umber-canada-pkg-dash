import AppShell from "@/app/components/layout/app-shell";
import { ShipmentsForm } from "../components/form";

export default function NewShipmentsPage() {
  return (
    <AppShell title="New shipments" subtitle="Create a new shipments record">
      <div className="max-w-3xl">
        <ShipmentsForm mode="create" />
      </div>
    </AppShell>
  );
}













