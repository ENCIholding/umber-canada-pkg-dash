import AppShell from "@/app/components/layout/app-shell";
import { TaxationForm } from "../components/form";

export default function NewTaxationPage() {
  return (
    <AppShell title="New Tax Record" subtitle="Create a taxation entry">
      <div className="max-w-3xl">
        <TaxationForm mode="create" />
      </div>
    </AppShell>
  );
}












