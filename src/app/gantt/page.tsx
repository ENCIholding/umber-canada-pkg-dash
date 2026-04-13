import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getGanttList } from "@/src/lib/services/gantt";

export default async function Page() {
  const data = await getGanttList();
  return (
    <AppShell title="gantt" subtitle="gantt overview">
      <PageActions title="gantt" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/gantt" />
    </AppShell>
  );
}









