import AppShell from "@/app/components/layout/app-shell";
import { ReceivingForm } from "../components/form";

export default function NewReceivingPage() {
  return (
    <AppShell title="New receiving" subtitle="Create a new receiving record">
      <div className="max-w-3xl">
        <ReceivingForm mode="create" />
      </div>
    </AppShell>
  );
}













