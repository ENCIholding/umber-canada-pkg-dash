import { AppShell } from "@/src/app/components/layout/app-shell";
import { calendarForm } from "../../components/form";
import { getcalendarById } from "@/src/lib/services/calendar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCalendarPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getcalendarById(id);
  return (
    <AppShell title="Edit calendar" subtitle="Update record">
      <div className="max-w-3xl">
        <calendarForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}