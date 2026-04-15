import AppShell from "@/app/components/layout/app-shell";
import { TaxationForm } from "../components/form";
import { getTaxationById } from "@/lib/services/taxation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TaxationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getTaxationById(id);

  return (
    <AppShell title="Tax Detail" subtitle="View tax record">
      <div className="max-w-3xl">
        <TaxationForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


