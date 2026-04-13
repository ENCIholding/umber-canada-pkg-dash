import { AppShell } from "@/src/app/components/layout/app-shell";
import { StakeholdersForm } from "../components/form";
import { getStakeholdersById } from "@/src/lib/services/stakeholders";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StakeholderDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getStakeholdersById(id);

  return (
    <AppShell title="Stakeholder Detail" subtitle="View stakeholder">
      <div className="max-w-3xl">
        <StakeholdersForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}