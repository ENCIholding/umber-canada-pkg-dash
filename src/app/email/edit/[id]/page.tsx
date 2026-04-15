import AppShell from "@/app/components/layout/app-shell";
import { EmailForm } from "../../components/form";
import { getemailById } from "@/lib/services/email";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditEmailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getemailById(id);
  return (
    <AppShell title="Edit email" subtitle="Update record">
      <div className="max-w-3xl">
        <EmailForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


