import { AppShell } from "@/src/app/components/layout/app-shell";
import { masterdbForm } from "../../components/form";
import { getmasterdbById } from "@/src/lib/services/master-db";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditMasterDbPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getmasterdbById(id);
  return (
    <AppShell title="Edit master-db" subtitle="Update record">
      <div className="max-w-3xl">
        <masterdbForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}