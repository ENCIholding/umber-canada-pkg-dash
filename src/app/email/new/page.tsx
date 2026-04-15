import AppShell from "@/app/components/layout/app-shell";
import { EmailForm } from "../components/form";

export default function NewEmailPage() {
  return (
    <AppShell title="New email" subtitle="Create a new email record">
      <div className="max-w-3xl">
        <EmailForm mode="create" />
      </div>
    </AppShell>
  );
}













