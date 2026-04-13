import { AppShell } from "@/src/app/components/layout/app-shell";
import { ganttForm } from "../components/form";

export default function NewGanttPage() {
  return (
    <AppShell title="New gantt" subtitle="Create a new gantt record">
      <div className="max-w-3xl">
        <GanttForm mode="create" />
      </div>
    </AppShell>
  );
}








