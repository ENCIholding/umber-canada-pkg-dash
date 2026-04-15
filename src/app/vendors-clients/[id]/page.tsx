import AppShell from "@/app/components/layout/app-shell";
import { VendorsClientsForm } from "../components/form";
import { getVendorsClientsById } from "@/lib/services/vendors-clients";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VendorsClientsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getVendorsClientsById(id);

  return (
    <AppShell title="Vendor/Client Detail" subtitle="View record">
      <div className="max-w-3xl">
        <VendorsClientsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


