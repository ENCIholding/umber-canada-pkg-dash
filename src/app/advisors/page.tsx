import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getAdvisorsList } from "@/src/lib/services/advisors";

export default async function Page() {
  const data = await getAdvisorsList();
  return (
    <AppShell title="advisors" subtitle="advisors overview">
      <PageActions title="advisors" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/advisors" />
    </AppShell>
  );
}









