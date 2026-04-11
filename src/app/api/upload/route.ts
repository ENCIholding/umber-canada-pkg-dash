import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const ALLOWED_EXT = [".pdf", ".doc", ".docx", ".xls", ".xlsx"];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const context = (formData.get("context") as string | null) || "general";

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = path.extname(file.name).toLowerCase();

    if (!ALLOWED_EXT.includes(ext)) {
      return NextResponse.json({ success: false, error: "File type not allowed" }, { status: 400 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const fileName = ${Date.now()}__;
    const filePath = path.join(UPLOAD_DIR, fileName);

    await fs.writeFile(filePath, buffer);

    const publicPath = /uploads/;

    return NextResponse.json({
      success: true,
      path: publicPath,
      name: file.name,
      context,
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
