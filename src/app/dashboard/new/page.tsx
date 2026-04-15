import AppShell from "@/app/components/layout/app-shell";
import { DashboardForm } from "../components/form";

export default function NewDashboardPage() {
  return (
    <AppShell title="New dashboard" subtitle="Create a new dashboard record">
      <div className="max-w-3xl">
        <DashboardForm mode="create" />
      </div>
    </AppShell>
  );
}













