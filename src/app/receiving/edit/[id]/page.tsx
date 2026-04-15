import AppShell from "@/app/components/layout/app-shell";
import { ReceivingForm } from "../../components/form";
import { getreceivingById } from "@/lib/services/receiving";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditReceivingPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getreceivingById(id);
  return (
    <AppShell title="Edit receiving" subtitle="Update record">
      <div className="max-w-3xl">
        <ReceivingForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


