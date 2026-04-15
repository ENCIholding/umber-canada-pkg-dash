import AppShell from "@/app/components/layout/app-shell";
import { PageActions } from "@/app/components/layout/page-actions";
import { ModuleHomeLinks } from "@/app/components/layout/module-home-links";
import { getStaffList } from "@/lib/services/careers-staff";

export default async function Page() {
  const data = await getStaffList();

  return (
    <AppShell title="Staff & Careers" subtitle="Team and hiring management">
      <PageActions title="Staff" />
      <div className="mt-4 rounded-lg border p-4">
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    
      <ModuleHomeLinks basePath="/careers-staff" />
    </AppShell>
  );
}













