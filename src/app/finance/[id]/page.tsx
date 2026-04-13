import { AppShell } from "@/src/app/components/layout/app-shell";
import { financeForm } from "../components/form";
import { getfinanceById } from "@/src/lib/services/finance";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FinanceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getfinanceById(id);
  return (
    <AppShell title="finance detail" subtitle="View record details">
      <div className="max-w-3xl">
        <financeForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}