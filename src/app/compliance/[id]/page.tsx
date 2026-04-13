import { AppShell } from "@/src/app/components/layout/app-shell";
import { ComplianceForm } from "../components/form";
import { getComplianceById } from "@/src/lib/services/compliance";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ComplianceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getComplianceById(id);

  return (
    <AppShell title="Compliance Detail" subtitle="View compliance record">
      <div className="max-w-3xl">
        <ComplianceForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}