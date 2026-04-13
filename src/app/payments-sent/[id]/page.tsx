import { AppShell } from "@/src/app/components/layout/app-shell";
import { PaymentsSentForm } from "../components/form";
import { getPaymentsSentById } from "@/src/lib/services/payments-sent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PaymentsSentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getPaymentsSentById(id);

  return (
    <AppShell title="Payment Sent Detail" subtitle="View outgoing payment">
      <div className="max-w-3xl">
        <PaymentsSentForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}