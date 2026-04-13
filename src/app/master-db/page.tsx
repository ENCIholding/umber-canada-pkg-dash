import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/src/app/components/layout/module-home-links";
import { getMasterDbList } from "@/src/lib/services/master-db";

export default async function Page() {
  const data = await getMasterDbList();
  return (
    <AppShell title="master-db" subtitle="master-db overview">
      <PageActions title="master-db" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/master-db" />
    </AppShell>
  );
}









