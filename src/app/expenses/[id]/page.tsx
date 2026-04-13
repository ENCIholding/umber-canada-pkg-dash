import { AppShell } from "@/src/app/components/layout/app-shell";
import { ExpensesForm } from "../components/form";
import { getExpensesById } from "@/src/lib/services/expenses";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ExpensesDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getExpensesById(id);

  return (
    <AppShell title="Expense Detail" subtitle="View expense record">
      <div className="max-w-3xl">
        <ExpensesForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}