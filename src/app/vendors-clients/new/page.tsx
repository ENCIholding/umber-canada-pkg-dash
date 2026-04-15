import AppShell from "@/app/components/layout/app-shell";
import { VendorsClientsForm } from "../components/form";

export default function NewVendorClientPage() {
  return (
    <AppShell title="New Vendor / Client" subtitle="Create contact record">
      <div className="max-w-3xl">
        <VendorsClientsForm mode="create" />
      </div>
    </AppShell>
  );
}












