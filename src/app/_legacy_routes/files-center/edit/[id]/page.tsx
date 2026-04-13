import { AppShell } from "@/src/app/components/layout/app-shell";
import { filescenterForm } from "../../components/form";
import { getfilescenterById } from "@/src/lib/services/files-center";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFilesCenterPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getfilescenterById(id);
  return (
    <AppShell title="Edit files-center" subtitle="Update record">
      <div className="max-w-3xl">
        <filescenterForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}