import AppShell from "@/app/components/layout/app-shell";
import { ReceivingForm } from "../components/form";
import { getreceivingById } from "@/lib/services/receiving";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReceivingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getreceivingById(id);
  return (
    <AppShell title="receiving detail" subtitle="View record details">
      <div className="max-w-3xl">
        <ReceivingForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


