import { cookies } from "next/headers";

export function requireSessionOrRedirect() {
  try {
    const c = cookies();
    const session = c.get("session")?.value;
    if (!session && process.env.NODE_ENV !== "development") {
      return { ok: false };
    }
    return { ok: true, session };
  } catch {
    return { ok: true, session: "dev" };
  }
}



