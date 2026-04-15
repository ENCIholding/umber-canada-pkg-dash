import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEV_AUTH } from "@/lib/auth/session";

const PUBLIC_PATHS = ["/", "/login", "/api/health", "/api/login", "/api/logout"];

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.some((path) => path === "/" ? pathname === "/" : pathname.startsWith(path));
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get(DEV_AUTH.sessionCookie)?.value;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  if (!session || session !== DEV_AUTH.sessionValue) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/login" && session) {
    const homeUrl = req.nextUrl.clone();
    homeUrl.pathname = "/";
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
