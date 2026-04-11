import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { module, rows } = await req.json();

    if (!rows || !Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ success: false, error: "No data to export" }, { status: 400 });
    }

    const headers = Object.keys(rows[0]);
    const csvRows = [
      headers.join(","),
      ...rows.map((row: Record<string, any>) =>
        headers.map((h) => JSON.stringify(row[h] ?? "")).join(",")
      ),
    ];

    const csv = csvRows.join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": ttachment; filename=".csv",
      },
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
