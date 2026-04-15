import AppShell from "@/app/components/layout/app-shell";
import { AdvisorsForm } from "../components/form";
import { getadvisorsById } from "@/lib/services/advisors";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdvisorsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getadvisorsById(id);
  return (
    <AppShell title="advisors detail" subtitle="View record details">
      <div className="max-w-3xl">
        <AdvisorsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


