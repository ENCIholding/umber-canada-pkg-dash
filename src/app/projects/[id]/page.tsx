import AppShell from "@/app/components/layout/app-shell";
import { ProjectsForm } from "../components/form";
import { getprojectsById } from "@/lib/services/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getprojectsById(id);
  return (
    <AppShell title="projects detail" subtitle="View record details">
      <div className="max-w-3xl">
        <ProjectsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}


