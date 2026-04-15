import AppShell from "@/app/components/layout/app-shell";
import { MasterDbForm } from "../components/form";
import { getmasterdbById } from "@/lib/services/master-db";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MasterDbDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getmasterdbById(id);
  return (
    <AppShell title="master-db detail" subtitle="View record details">
      <div className="max-w-3xl">
        <MasterDbForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


