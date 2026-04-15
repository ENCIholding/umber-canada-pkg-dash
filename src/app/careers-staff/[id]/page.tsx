import AppShell from "@/app/components/layout/app-shell";
import { StaffForm } from "../components/form";
import { getStaffById } from "@/lib/services/careers-staff";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StaffDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getStaffById(id);

  return (
    <AppShell title="Staff Detail" subtitle="View staff record">
      <div className="max-w-3xl">
        <StaffForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


