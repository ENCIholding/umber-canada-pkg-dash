import { AppShell } from "@/src/app/components/layout/app-shell";
import { FileForm } from "../components/form";
import { getFileById } from "@/src/lib/services/file-center";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FileDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getFileById(id);

  return (
    <AppShell title="File Detail" subtitle="View file record">
      <div className="max-w-3xl">
        <FileForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}