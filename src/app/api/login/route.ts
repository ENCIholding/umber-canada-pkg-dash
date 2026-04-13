import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Dev-only: accept any credentials and set a dev session cookie
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session", "dev-session-umbercanada", { httpOnly: true, path: "/" });
  return res;
}



