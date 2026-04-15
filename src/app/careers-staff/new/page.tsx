import AppShell from "@/app/components/layout/app-shell";
import { StaffForm } from "../components/form";

export default function NewStaffPage() {
  return (
    <AppShell title="Add Staff" subtitle="Create a new staff record">
      <div className="max-w-3xl">
        <StaffForm mode="create" />
      </div>
    </AppShell>
  );
}












