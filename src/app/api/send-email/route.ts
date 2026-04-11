import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const { to, subject, message } = await req.json();

  await sendEmail(to, subject, message);

  return NextResponse.json({ success: true });
}
