import { AppShell } from "@/src/app/components/layout/app-shell";
import { advisorsForm } from "../components/form";
import { getadvisorsById } from "@/src/lib/services/advisors";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdvisorsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getadvisorsById(id);
  return (
    <AppShell title="advisors detail" subtitle="View record details">
      <div className="max-w-3xl">
        <advisorsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}