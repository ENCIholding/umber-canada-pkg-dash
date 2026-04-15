import AppShell from "@/app/components/layout/app-shell";
import { EmailForm } from "../components/form";
import { getemailById } from "@/lib/services/email";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EmailDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getemailById(id);
  return (
    <AppShell title="email detail" subtitle="View record details">
      <div className="max-w-3xl">
        <EmailForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


