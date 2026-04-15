import AppShell from "@/app/components/layout/app-shell";
import { ComplianceForm } from "../components/form";

export default function NewCompliancePage() {
  return (
    <AppShell title="New Compliance Record" subtitle="Create a compliance entry">
      <div className="max-w-3xl">
        <ComplianceForm mode="create" />
      </div>
    </AppShell>
  );
}












