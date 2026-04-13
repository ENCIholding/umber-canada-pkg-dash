import { AppShell } from "@/src/app/components/layout/app-shell";
import { filescenterForm } from "../components/form";

export default function NewFilesCenterPage() {
  return (
    <AppShell title="New files-center" subtitle="Create a new files-center record">
      <div className="max-w-3xl">
        <filescenterForm mode="create" />
      </div>
    </AppShell>
  );
}