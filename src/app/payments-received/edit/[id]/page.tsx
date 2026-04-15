import AppShell from "@/app/components/layout/app-shell";
import { PaymentsReceivedForm } from "../../components/form";
import { getPaymentsReceivedById } from "@/lib/services/payments-received";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPaymentsReceivedPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getPaymentsReceivedById(id);

  return (
    <AppShell title="Edit Payment Received" subtitle="Update incoming payment">
      <div className="max-w-3xl">
        <PaymentsReceivedForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


