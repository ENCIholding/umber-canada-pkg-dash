import AppShell from "@/app/components/layout/app-shell";
import { ProjectsForm } from "../components/form";

export default function NewProjectsPage() {
  return (
    <AppShell title="New projects" subtitle="Create a new projects record">
      <div className="max-w-3xl">
        <ProjectsForm mode="create" />
      </div>
    </AppShell>
  );
}













