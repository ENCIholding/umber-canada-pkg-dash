import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { getfilescenterList } from "@/src/lib/services/files-center";

export default async function Page() {
  const data = await getfilescenterList();
  return (
    <AppShell title="files-center" subtitle="files-center overview">
      <PageActions title="files-center" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </AppShell>
  );
}