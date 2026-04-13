import { AppShell } from "@/src/app/components/layout/app-shell";
import { TaxationForm } from "../../components/form";
import { getTaxationById } from "@/src/lib/services/taxation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTaxationPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getTaxationById(id);

  return (
    <AppShell title="Edit Tax Record" subtitle="Update taxation record">
      <div className="max-w-3xl">
        <TaxationForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}