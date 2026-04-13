import { AppShell } from "@/src/app/components/layout/app-shell";
import { FileForm } from "../../components/form";
import { getFileById } from "@/src/lib/services/file-center";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFilePage({ params }: PageProps) {
  const { id } = await params;
  const record = await getFileById(id);

  return (
    <AppShell title="Edit File" subtitle="Update file metadata">
      <div className="max-w-3xl">
        <FileForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}