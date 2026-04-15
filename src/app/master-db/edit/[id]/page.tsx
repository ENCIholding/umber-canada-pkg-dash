import AppShell from "@/app/components/layout/app-shell";
import { MasterDbForm } from "../../components/form";
import { getmasterdbById } from "@/lib/services/master-db";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditMasterDbPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getmasterdbById(id);
  return (
    <AppShell title="Edit master-db" subtitle="Update record">
      <div className="max-w-3xl">
        <MasterDbForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


