import { AppShell } from "@/src/app/components/layout/app-shell";
import { filescenterForm } from "../components/form";
import { getfilescenterById } from "@/src/lib/services/files-center";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FilesCenterDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getfilescenterById(id);
  return (
    <AppShell title="files-center detail" subtitle="View record details">
      <div className="max-w-3xl">
        <filescenterForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}