import { AppShell } from "@/src/app/components/layout/app-shell";
import { StaffForm } from "../../components/form";
import { getStaffById } from "@/src/lib/services/careers-staff";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditStaffPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getStaffById(id);

  return (
    <AppShell title="Edit Staff" subtitle="Update staff record">
      <div className="max-w-3xl">
        <StaffForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}