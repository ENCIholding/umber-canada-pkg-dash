import { AppShell } from "@/src/app/components/layout/app-shell";
import { calendarForm } from "../components/form";

export default function NewCalendarPage() {
  return (
    <AppShell title="New calendar" subtitle="Create a new calendar record">
      <div className="max-w-3xl">
        <calendarForm mode="create" />
      </div>
    </AppShell>
  );
}