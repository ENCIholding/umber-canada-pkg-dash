import { AppShell } from "@/src/app/components/layout/app-shell";
import { calendarForm } from "../components/form";
import { getcalendarById } from "@/src/lib/services/calendar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CalendarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getcalendarById(id);
  return (
    <AppShell title="calendar detail" subtitle="View record details">
      <div className="max-w-3xl">
        <calendarForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}