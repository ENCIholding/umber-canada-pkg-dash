import { AppShell } from "@/src/app/components/layout/app-shell";
import { projectsForm } from "../components/form";

export default function NewProjectsPage() {
  return (
    <AppShell title="New projects" subtitle="Create a new projects record">
      <div className="max-w-3xl">
        <ProjectsForm mode="create" />
      </div>
    </AppShell>
  );
}








