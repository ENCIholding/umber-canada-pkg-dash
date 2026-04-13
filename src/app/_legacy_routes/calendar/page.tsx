import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { getcalendarList } from "@/src/lib/services/calendar";

export default async function Page() {
  const data = await getcalendarList();
  return (
    <AppShell title="calendar" subtitle="calendar overview">
      <PageActions title="calendar" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </AppShell>
  );
}