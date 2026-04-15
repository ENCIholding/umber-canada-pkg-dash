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
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleUpload() {
    if (!file) return;
    setIsUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", file);

    const uploadResponse = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const uploadPayload = await uploadResponse.json().catch(() => ({ success: false }));
    if (!uploadResponse.ok || !uploadPayload.success) {
      setStatus(uploadPayload.error || "Upload failed.");
      setIsUploading(false);
      return;
    }

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "umbercanadapkg@gmail.com",
        subject: `New document uploaded: ${file.name}`,
        message: `A new document has been uploaded to the file center.\n\nFile: ${file.name}\nStored as: ${uploadPayload.fileName}`,
      }),
    });

    setStatus("Upload complete.");
    setFile(null);
    setIsUploading(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>

        <input
          type="file"
          accept={ACCEPTED_TYPES}
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="border p-2 rounded"
        />
        <p className="text-xs text-muted-foreground">
          Supports PDF, Word, RTF, text, and common image formats for resumes, supplier docs, and job packages.
        </p>

        {status ? <div className="rounded-md border px-3 py-2 text-sm">{status}</div> : null}

        <Button
          onClick={handleUpload}
          className="mt-4"
          disabled={!file || isUploading}
        >
          {isUploading ? "Uploading..." : "Upload"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}












