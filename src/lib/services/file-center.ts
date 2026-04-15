import fs from "fs/promises";
import path from "path";

export type FileRecord = {
  id: string;
  fileName: string;
  category?: string;
  linkedTo?: string;
  projectName?: string;
  status?: string;
  notes?: string;
  uploadedAt?: string;
  extension?: string;
};

const MOCK_FILES: FileRecord[] = [
  {
    id: '1',
    fileName: 'Building Permit.pdf',
    category: 'Permit',
    projectName: 'Parkallen',
    status: 'active'
  }
];

export async function getFilesList() {
  const uploadDir = path.join(process.cwd(), "uploads");

  try {
    const entries = await fs.readdir(uploadDir, { withFileTypes: true });
    const uploadedFiles = await Promise.all(
      entries
        .filter((entry) => entry.isFile())
        .map(async (entry) => {
          const filePath = path.join(uploadDir, entry.name);
          const stats = await fs.stat(filePath);
          const extension = path.extname(entry.name).toLowerCase();
          const normalizedName = entry.name.replace(/^\d+__/, "");

          return {
            id: entry.name,
            fileName: normalizedName,
            category:
              extension === ".pdf" ? "PDF package" :
              extension === ".doc" || extension === ".docx" ? "Word document" :
              extension === ".rtf" || extension === ".txt" ? "Text document" :
              "Image",
            projectName: "Unassigned",
            status: "uploaded",
            notes: "Stored locally in the internal upload vault",
            uploadedAt: stats.birthtime.toISOString(),
            extension
          } satisfies FileRecord;
        })
    );

    return [...uploadedFiles.sort((a, b) => (a.uploadedAt && b.uploadedAt ? b.uploadedAt.localeCompare(a.uploadedAt) : 0)), ...MOCK_FILES];
  } catch {
    return MOCK_FILES;
  }
}

export async function getFileById(id: string) {
  return (await getFilesList()).find(x => x.id === id) ?? null;
}











