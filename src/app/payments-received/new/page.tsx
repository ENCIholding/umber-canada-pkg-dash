import AppShell from "@/app/components/layout/app-shell";
import { PaymentsReceivedForm } from "../components/form";

export default function NewPaymentsReceivedPage() {
  return (
    <AppShell title="New Payment Received" subtitle="Create a new incoming payment">
      <div className="max-w-3xl">
        <PaymentsReceivedForm mode="create" />
      </div>
    </AppShell>
  );
}












