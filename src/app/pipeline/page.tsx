import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getPipelineList } from "@/lib/services/pipeline";

export default async function Page() {
  const data = await getPipelineList();
  return (
    <AppShell title="pipeline" subtitle="pipeline overview">
      <PageActions title="pipeline" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/pipeline" />
    </AppShell>
  );
}














