import { AppShell } from "@/src/app/components/layout/app-shell";
import { receivingForm } from "../components/form";
import { getreceivingById } from "@/src/lib/services/receiving";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReceivingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getreceivingById(id);
  return (
    <AppShell title="receiving detail" subtitle="View record details">
      <div className="max-w-3xl">
        <receivingForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}