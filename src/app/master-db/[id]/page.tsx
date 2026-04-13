import { AppShell } from "@/src/app/components/layout/app-shell";
import { masterdbForm } from "../components/form";
import { getmasterdbById } from "@/src/lib/services/master-db";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MasterDbDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getmasterdbById(id);
  return (
    <AppShell title="master-db detail" subtitle="View record details">
      <div className="max-w-3xl">
        <masterdbForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}