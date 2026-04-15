import AppShell from "@/app/components/layout/app-shell";
import { RentalsForm } from "../../components/form";
import { getRentalsById } from "@/lib/services/rentals";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditRentalsPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getRentalsById(id);

  return (
    <AppShell title="Edit Rental" subtitle="Update rental record">
      <div className="max-w-3xl">
        <RentalsForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


