import AppShell from "@/app/components/layout/app-shell";
import { ProcurementForm } from "../components/form";

export default function NewProcurementPage() {
  return (
    <AppShell title="New Procurement" subtitle="Create a new procurement record">
      <div className="max-w-3xl">
        <ProcurementForm mode="create" />
      </div>
    </AppShell>
  );
}












