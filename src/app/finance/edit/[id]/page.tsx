import { AppShell } from "@/src/app/components/layout/app-shell";
import { financeForm } from "../../components/form";
import { getfinanceById } from "@/src/lib/services/finance";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFinancePage({ params }: PageProps) {
  const { id } = await params;
  const record = await getfinanceById(id);
  return (
    <AppShell title="Edit finance" subtitle="Update record">
      <div className="max-w-3xl">
        <financeForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}