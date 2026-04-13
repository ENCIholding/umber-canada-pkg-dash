import { AppShell } from "@/src/app/components/layout/app-shell";
import { StakeholdersForm } from "../components/form";

export default function NewStakeholderPage() {
  return (
    <AppShell title="New Stakeholder" subtitle="Create stakeholder record">
      <div className="max-w-3xl">
        <StakeholdersForm mode="create" />
      </div>
    </AppShell>
  );
}








