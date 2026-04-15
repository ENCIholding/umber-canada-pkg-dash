import { NextResponse } from "next/server";

export async function GET() {
  try {
    const csv = "id,name\n1,Example";

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=\"export.csv\"",
      },
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}















