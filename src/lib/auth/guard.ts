import { cookies } from "next/headers";
import { DEV_AUTH } from "./session";

export async function requireSessionOrRedirect() {
  try {
    const c = await cookies();
    const session = c.get(DEV_AUTH.sessionCookie)?.value;
    if (!session && process.env.NODE_ENV !== "development") {
      return { ok: false };
    }
    return { ok: true, session };
  } catch {
    return { ok: true, session: "dev" };
  }
}







