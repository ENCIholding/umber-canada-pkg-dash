import AppShell from "@/app/components/layout/app-shell";
import { ProjectsForm } from "../../components/form";
import { getprojectsById } from "@/lib/services/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectsPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getprojectsById(id);
  return (
    <AppShell title="Edit projects" subtitle="Update record">
      <div className="max-w-3xl">
        <ProjectsForm mode="edit" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


