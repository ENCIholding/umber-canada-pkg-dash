import { NextResponse } from "next/server";
import { DEV_AUTH, getSessionCookieOptions, isValidDevLogin } from "@/lib/auth/session";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!isValidDevLogin(username, password)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Use the local development credentials shown on the sign-in screen."
      },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true, username: DEV_AUTH.username });
  res.cookies.set(DEV_AUTH.sessionCookie, DEV_AUTH.sessionValue, getSessionCookieOptions());
  return res;
}







