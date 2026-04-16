"use client";

import { useState } from "react";
import UploadDialog from "@/components/files/upload-dialog";

interface PageActionsProps {
  title?: string;
}

export function PageActions({ title }: PageActionsProps) {
  const [uploadOpen, setUploadOpen] = useState(false);

  async function handleSendEmail() {
    const to = window.prompt("Recipient email");
    const subject = window.prompt("Subject");
    const message = window.prompt("Message");

    if (!to || !subject || !message) {
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, message })
    });

    window.alert(response.ok ? "Email queued successfully." : "Email sending failed.");
  }

  async function handleExport() {
    const response = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: title ?? "dashboard",
        rows: [{ exportedAt: new Date().toISOString(), module: title ?? "dashboard" }]
      })
    });

    if (!response.ok) {
      window.alert("Export failed.");
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(title ?? "module").toLowerCase().replace(/\s+/g, "-")}-export.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="page-actions flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3">
        <span className="text-sm font-medium">{title ? `${title} actions` : "Actions"}</span>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={() => setUploadOpen(true)}>
            Upload document
          </button>
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={handleExport}>
            Export CSV
          </button>
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={handleSendEmail}>
            Quick email
          </button>
        </div>
      </div>
      <UploadDialog open={uploadOpen} onOpenChange={setUploadOpen} />
    </>
  );
}

export default PageActions;
