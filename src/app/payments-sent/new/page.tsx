import AppShell from "@/app/components/layout/app-shell";
import { PaymentsSentForm } from "../components/form";

export default function NewPaymentsSentPage() {
  return (
    <AppShell title="New Payment Sent" subtitle="Create a new outgoing payment">
      <div className="max-w-3xl">
        <PaymentsSentForm mode="create" />
      </div>
    </AppShell>
  );
}












