import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

function toCsv(rows: Array<Record<string, unknown>>) {
  if (!rows.length) {
    return "status,message\nempty,No rows provided";
  }

  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((key) => set.add(key));
      return set;
    }, new Set<string>())
  );

  const lines = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((header) => {
          const value = row[header] ?? "";
          const normalized = String(value).replace(/"/g, '""');
          return `"${normalized}"`;
        })
        .join(",")
    )
  ];

  return lines.join("\n");
}

export async function GET() {
  try {
    const csv = "id,name\n1,Example";

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=\"export.csv\""
      }
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const moduleName = String(body.module ?? "export");
    const rows = Array.isArray(body.rows) ? body.rows : [];
    const emailTo = body.emailTo ? String(body.emailTo) : "";
    const csv = toCsv(rows);
    const fileName = `${moduleName.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}-export.csv`;

    if (emailTo) {
      await sendEmail(
        emailTo,
        `${moduleName} export`,
        `Attached is the latest ${moduleName} export from Umber Canada.`,
        [
          {
            filename: fileName,
            content: csv,
            contentType: "text/csv"
          }
        ]
      );

      return NextResponse.json({ success: true, emailed: true, fileName });
    }

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="${fileName}"`
      }
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
