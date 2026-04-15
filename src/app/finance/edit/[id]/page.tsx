import AppShell from "@/app/components/layout/app-shell";
import { FinanceForm } from "../../components/form";
import { getfinanceById } from "@/lib/services/finance";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFinancePage({ params }: PageProps) {
  const { id } = await params;
  const record = await getfinanceById(id);
  return (
    <AppShell title="Edit finance" subtitle="Update record">
      <div className="max-w-3xl">
        <FinanceForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


