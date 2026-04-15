import AppShell from "@/app/components/layout/app-shell";
import { ExpensesForm } from "../components/form";

export default function NewExpensesPage() {
  return (
    <AppShell title="New Expense" subtitle="Create a new expense entry">
      <div className="max-w-3xl">
        <ExpensesForm mode="create" />
      </div>
    </AppShell>
  );
}












