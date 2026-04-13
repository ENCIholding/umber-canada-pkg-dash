import { AppShell } from "@/src/app/components/layout/app-shell";
import { masterdbForm } from "../components/form";

export default function NewMasterDbPage() {
  return (
    <AppShell title="New master-db" subtitle="Create a new master-db record">
      <div className="max-w-3xl">
        <MasterDbForm mode="create" />
      </div>
    </AppShell>
  );
}








