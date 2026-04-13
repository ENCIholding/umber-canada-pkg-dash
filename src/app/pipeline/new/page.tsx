import { AppShell } from "@/src/app/components/layout/app-shell";
import { pipelineForm } from "../components/form";

export default function NewPipelinePage() {
  return (
    <AppShell title="New pipeline" subtitle="Create a new pipeline record">
      <div className="max-w-3xl">
        <PipelineForm mode="create" />
      </div>
    </AppShell>
  );
}








