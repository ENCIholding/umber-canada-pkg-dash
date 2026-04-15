import AppShell from "@/app/components/layout/app-shell";
import { AdvisorsForm } from "../components/form";

export default function NewAdvisorsPage() {
  return (
    <AppShell title="New advisors" subtitle="Create a new advisors record">
      <div className="max-w-3xl">
        <AdvisorsForm mode="create" />
      </div>
    </AppShell>
  );
}













