import AppShell from "@/app/components/layout/app-shell";
import { ExpensesForm } from "../../components/form";
import { getExpensesById } from "@/lib/services/expenses";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditExpensesPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getExpensesById(id);

  return (
    <AppShell title="Edit Expense" subtitle="Update expense record">
      <div className="max-w-3xl">
        <ExpensesForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


