import { AppShell } from "@/src/app/components/layout/app-shell";
import { ReportsForm } from "../components/form";

export default function NewReportsPage() {
  return (
    <AppShell title="New Report" subtitle="Create a report definition">
      <div className="max-w-3xl">
        <ReportsForm mode="create" />
      </div>
    </AppShell>
  );
}








