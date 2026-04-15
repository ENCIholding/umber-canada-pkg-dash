import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getTaxationList } from "@/lib/services/taxation";

export default async function Page() {
  const data = await getTaxationList();

  return (
    <AppShell title="Taxation" subtitle="Tax tracking and filings">
      <PageActions title="Taxation" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/taxation" />
    </AppShell>
  );
}













