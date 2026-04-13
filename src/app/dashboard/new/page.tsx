import { AppShell } from "@/src/app/components/layout/app-shell";
import { dashboardForm } from "../components/form";

export default function NewDashboardPage() {
  return (
    <AppShell title="New dashboard" subtitle="Create a new dashboard record">
      <div className="max-w-3xl">
        <DashboardForm mode="create" />
      </div>
    </AppShell>
  );
}








