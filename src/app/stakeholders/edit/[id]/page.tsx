import AppShell from "@/app/components/layout/app-shell";
import { StakeholdersForm } from "../../components/form";
import { getStakeholdersById } from "@/lib/services/stakeholders";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditStakeholderPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getStakeholdersById(id);

  return (
    <AppShell title="Edit Stakeholder" subtitle="Update stakeholder">
      <div className="max-w-3xl">
        <StakeholdersForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


