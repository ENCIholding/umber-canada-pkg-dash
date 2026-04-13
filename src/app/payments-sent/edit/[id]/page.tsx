import { AppShell } from "@/src/app/components/layout/app-shell";
import { PaymentsSentForm } from "../../components/form";
import { getPaymentsSentById } from "@/src/lib/services/payments-sent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPaymentsSentPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getPaymentsSentById(id);

  return (
    <AppShell title="Edit Payment Sent" subtitle="Update outgoing payment">
      <div className="max-w-3xl">
        <PaymentsSentForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}