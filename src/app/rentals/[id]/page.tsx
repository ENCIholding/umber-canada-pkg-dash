import AppShell from "@/app/components/layout/app-shell";
import { RentalsForm } from "../components/form";
import { getRentalsById } from "@/lib/services/rentals";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RentalsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getRentalsById(id);

  return (
    <AppShell title="Rental Detail" subtitle="View rental record">
      <div className="max-w-3xl">
        <RentalsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


