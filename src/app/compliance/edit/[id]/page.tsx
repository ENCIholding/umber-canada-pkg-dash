import { AppShell } from "@/src/app/components/layout/app-shell";
import { ComplianceForm } from "../../components/form";
import { getComplianceById } from "@/src/lib/services/compliance";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCompliancePage({ params }: PageProps) {
  const { id } = await params;
  const record = await getComplianceById(id);

  return (
    <AppShell title="Edit Compliance" subtitle="Update compliance record">
      <div className="max-w-3xl">
        <ComplianceForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}