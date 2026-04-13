"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UploadDialog from "@/components/files/upload-dialog";

export default function PageActions() {
  const router = useRouter();
  const [uploadOpen, setUploadOpen] = useState(false);

  async function handleSendEmail() {
    const to = prompt("Enter recipient email:");
    const subject = prompt("Enter subject:");
    const message = prompt("Enter message:");

    if (!to || !subject || !message) {
      alert("Email cancelled.");
      return;
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, message }),
    });

    if (res.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  }

  async function handleExport() {
    const res = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: "dashboard",
        rows: [{ example: "data" }],
      }),
    });

    if (!res.ok) {
      alert("Export failed.");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dashboard-export.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="flex gap-3 p-4 border-b bg-white dark:bg-zinc-900">
      <Button variant="outline" onClick={() => setUploadOpen(true)} className="hover:scale-[1.03] transition-transform">
        Upload File
      </Button>

      <Button variant="outline" onClick={handleExport} className="hover:scale-[1.03] transition-transform">
        Export File
      </Button>

      <Button variant="outline" onClick={handleSendEmail} className="hover:scale-[1.03] transition-transform">
        Send Email
      </Button>

      <UploadDialog open={uploadOpen} onOpenChange={setUploadOpen} />
    </div>
  );
}








