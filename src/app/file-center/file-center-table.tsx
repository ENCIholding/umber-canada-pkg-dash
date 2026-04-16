"use client";

import { useState } from "react";
import type { FileRecord } from "@/lib/services/file-center";

export function FileCenterTable({ initialFiles }: { initialFiles: FileRecord[] }) {
  const [files, setFiles] = useState(initialFiles);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function handleDelete(fileId: string) {
    const confirmed = window.confirm("Delete this file record from the local upload vault?");
    if (!confirmed) {
      return;
    }

    setBusyId(fileId);
    const response = await fetch("/api/upload/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName: fileId })
    });

    if (response.ok) {
      setFiles((current) => current.filter((file) => file.id !== fileId));
    } else {
      const payload = await response.json().catch(() => ({ error: "Delete failed." }));
      window.alert(payload.error || "Delete failed.");
    }

    setBusyId(null);
  }

  return (
    <div className="mt-6 overflow-hidden rounded-xl border">
      <table className="min-w-full divide-y">
        <thead className="bg-muted/40 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <tr>
            <th className="px-4 py-3">Document</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Linked job</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Notes</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y text-sm">
          {files.map((file) => (
            <tr key={file.id}>
              <td className="px-4 py-4">
                <div className="font-medium">{file.fileName}</div>
                <div className="mt-1 text-muted-foreground">{file.uploadedAt ? new Date(file.uploadedAt).toLocaleString() : "Existing document"}</div>
              </td>
              <td className="px-4 py-4 text-muted-foreground">{file.category}</td>
              <td className="px-4 py-4">{file.projectName ?? "Unassigned"}</td>
              <td className="px-4 py-4">
                <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase">{file.status ?? "active"}</span>
              </td>
              <td className="px-4 py-4 text-muted-foreground">{file.notes ?? "-"}</td>
              <td className="px-4 py-4">
                {file.uploadedAt ? (
                  <button
                    type="button"
                    className="rounded-md border px-3 py-2 text-xs font-medium transition hover:bg-accent disabled:opacity-50"
                    disabled={busyId === file.id}
                    onClick={() => handleDelete(file.id)}
                  >
                    {busyId === file.id ? "Deleting..." : "Delete"}
                  </button>
                ) : (
                  <span className="text-xs text-muted-foreground">Seeded record</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
