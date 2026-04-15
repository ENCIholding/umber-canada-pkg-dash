import AppShell from "@/app/components/layout/app-shell";
import { FileForm } from "../components/form";

export default function NewFilePage() {
  return (
    <AppShell title="Upload File" subtitle="Add new document">
      <div className="max-w-3xl">
        <FileForm mode="create" />
      </div>
    </AppShell>
  );
}












