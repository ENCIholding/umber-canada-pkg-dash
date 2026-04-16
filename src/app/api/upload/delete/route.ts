import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const fileName = String(body.fileName ?? "");

    if (!fileName) {
      return NextResponse.json({ success: false, error: "Missing file name." }, { status: 400 });
    }

    const safeName = path.basename(fileName);
    const filePath = path.join(process.cwd(), "uploads", safeName);
    await fs.unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
