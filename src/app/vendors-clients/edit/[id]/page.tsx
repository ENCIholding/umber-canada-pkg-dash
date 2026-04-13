import { AppShell } from "@/src/app/components/layout/app-shell";
import { VendorsClientsForm } from "../../components/form";
import { getVendorsClientsById } from "@/src/lib/services/vendors-clients";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditVendorsClientsPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getVendorsClientsById(id);

  return (
    <AppShell title="Edit Vendor / Client" subtitle="Update record">
      <div className="max-w-3xl">
        <VendorsClientsForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}