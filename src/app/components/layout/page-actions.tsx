"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import UploadDialog from "@/components/files/upload-dialog";

interface PageActionsProps {
  title?: string;
}

function getModuleBase(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments[0] ? `/${segments[0]}` : "/dashboard";
}

export function PageActions({ title }: PageActionsProps) {
  const [uploadOpen, setUploadOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const moduleBase = useMemo(() => getModuleBase(pathname), [pathname]);
  const isDetailPage = pathname.split("/").filter(Boolean).length > 1;

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

  async function handleExportAndEmail() {
    const to = window.prompt("Recipient email for the export attachment");
    if (!to) {
      return;
    }

    const response = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: title ?? "dashboard",
        rows: [{ exportedAt: new Date().toISOString(), module: title ?? "dashboard" }],
        emailTo: to
      })
    });

    const payload = await response.json().catch(() => ({ success: false }));
    window.alert(response.ok ? "Export emailed successfully." : payload.error || "Export email failed.");
  }

  return (
    <>
      <div className="page-actions flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3">
        <span className="text-sm font-medium">{title ? `${title} actions` : "Actions"}</span>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={() => router.back()}>
            Back
          </button>
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={() => router.forward()}>
            Next
          </button>
          <Link href={`${moduleBase}/new`} className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent">
            Add record
          </Link>
          {isDetailPage ? (
            <Link href={`${pathname.replace(/\/edit\/[^/]+$/, "").replace(/\/[^/]+$/, "") || moduleBase}`} className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent">
              All records
            </Link>
          ) : null}
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={() => setUploadOpen(true)}>
            Upload file
          </button>
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={handleExport}>
            Export CSV
          </button>
          <button type="button" className="rounded-md border px-3 py-2 text-sm font-medium transition hover:bg-accent" onClick={handleExportAndEmail}>
            Export + email
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
