"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ACCEPTED_TYPES = ".pdf,.doc,.docx,.rtf,.txt,.png,.jpg,.jpeg,.webp";

export default function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [linkedProject, setLinkedProject] = useState("");
  const [notifyRecipient, setNotifyRecipient] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleUpload() {
    if (!file) {
      return;
    }

    setIsUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("linkedProject", linkedProject);

    const uploadResponse = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    const uploadPayload = await uploadResponse.json().catch(() => ({ success: false }));
    if (!uploadResponse.ok || !uploadPayload.success) {
      setStatus(uploadPayload.error || "Upload failed.");
      setIsUploading(false);
      return;
    }

    if (notifyRecipient) {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: notifyRecipient,
          subject: `New document uploaded: ${file.name}`,
          message:
            `A new document has been uploaded to the file center.\n\n` +
            `File: ${file.name}\n` +
            `Stored as: ${uploadPayload.fileName}\n` +
            `Linked project: ${linkedProject || "Unassigned"}`,
          attachments: uploadPayload.attachment
            ? [
                {
                  filename: uploadPayload.originalName || file.name,
                  path: uploadPayload.attachment.path
                }
              ]
            : []
        })
      });
    }

    setStatus("Upload complete.");
    setFile(null);
    setLinkedProject("");
    setNotifyRecipient("");
    setIsUploading(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload file and trigger workflow</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <input
            type="file"
            accept={ACCEPTED_TYPES}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full rounded border p-2"
          />

          <input
            type="text"
            value={linkedProject}
            onChange={(e) => setLinkedProject(e.target.value)}
            placeholder="Linked project or job code"
            className="w-full rounded border p-2"
          />

          <input
            type="email"
            value={notifyRecipient}
            onChange={(e) => setNotifyRecipient(e.target.value)}
            placeholder="Notify recipient (optional)"
            className="w-full rounded border p-2"
          />

          <p className="text-xs text-muted-foreground">
            Supports PDF, Word, RTF, text, and common image formats for resumes, supplier docs, job packages, and billing attachments.
          </p>

          {status ? <div className="rounded-md border px-3 py-2 text-sm">{status}</div> : null}

          <Button onClick={handleUpload} className="w-full" disabled={!file || isUploading}>
            {isUploading ? "Uploading..." : "Upload and trigger workflow"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
