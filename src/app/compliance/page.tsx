import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getComplianceList } from "@/src/lib/services/compliance";

export default async function Page() {
  const data = await getComplianceList();

  return (
    <AppShell title="Compliance" subtitle="Compliance tracking and records">
      <PageActions title="Compliance" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/compliance" />
    </AppShell>
  );
}









