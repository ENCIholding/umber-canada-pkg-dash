import { NextResponse } from "next/server";
import { DEV_AUTH, clearSessionCookieOptions } from "@/lib/auth/session";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(DEV_AUTH.sessionCookie, "", clearSessionCookieOptions());
  return res;
}







