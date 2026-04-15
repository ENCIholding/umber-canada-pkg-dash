import AppShell from "@/app/components/layout/app-shell";
import { FinanceForm } from "../components/form";

export default function NewFinancePage() {
  return (
    <AppShell title="New finance" subtitle="Create a new finance record">
      <div className="max-w-3xl">
        <FinanceForm mode="create" />
      </div>
    </AppShell>
  );
}













