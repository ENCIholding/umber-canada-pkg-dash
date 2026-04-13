import { AppShell } from "@/src/app/components/layout/app-shell";
import { projectsForm } from "../components/form";
import { getprojectsById } from "@/src/lib/services/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await getprojectsById(id);
  return (
    <AppShell title="projects detail" subtitle="View record details">
      <div className="max-w-3xl">
        <projectsForm mode="view" initialData={record ?? undefined} />
      </div>
    </AppShell>
  );
}