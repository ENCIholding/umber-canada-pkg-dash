"use client";

import { useState } from "react";

type UploadDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  context?: string;
};

export function UploadDialog({ open, onOpenChange, context = "general" }: UploadDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isResume, setIsResume] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleUpload() {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    if (isResume && !applicantEmail) {
      alert("Please enter applicant email.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("context", isResume ? "resume" : context);

    setLoading(true);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    setLoading(false);

    if (!res.ok) {
      alert("Upload failed.");
      return;
    }

    const data = await res.json();
    alert("File uploaded: " + data.path);

    // =========================
    // Auto-email HR for resumes
    // =========================
    if (isResume) {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "umbercanadapkg@gmail.com",
          subject: "New Resume Uploaded",
          message: A new resume has been uploaded.\n\nFile: \nApplicant Email: ,
        }),
      });

      // =========================
      // Auto-email applicant thank-you
      // =========================
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: applicantEmail,
          subject: "Thank you for your application",
          message:
            "We have received your resume and will get back in touch if you are shortlisted.\n\nThank you and Regards,\nManagement\nUmber Canada - Edmonton, AB, Canada",
        }),
      });

      alert("Resume sent to HR and thank-you email sent to applicant.");
    }

    onOpenChange(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Upload File</h2>

        <div className="space-y-3">
          <input
            type="file"
            className="block w-full text-sm text-zinc-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-zinc-100 file:text-zinc-900 hover:file:bg-zinc-200"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isResume}
              onChange={(e) => setIsResume(e.target.checked)}
            />
            This is a resume (careers)
          </label>

          {isResume && (
            <input
              type="email"
              placeholder="Applicant Email"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-sm"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
            />
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 rounded-md border border-zinc-500 text-sm hover:bg-zinc-800 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-sky-400 text-sm font-semibold text-zinc-900 hover:from-emerald-300 hover:to-sky-300 disabled:opacity-60 transition"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
