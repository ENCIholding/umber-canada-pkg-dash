export const DEV_AUTH = {
  username: process.env.DEV_AUTH_USERNAME || "umbercanada",
  password: process.env.DEV_AUTH_PASSWORD || "test umber",
  sessionCookie: "session",
  sessionValue: process.env.DEV_AUTH_SESSION || "dev-session-umbercanada"
} as const;

export function isValidDevLogin(username?: string, password?: string) {
  return username === DEV_AUTH.username && password === DEV_AUTH.password;
}

export function getSessionCookieOptions(maxAgeSeconds = 60 * 60 * 10) {
  return {
    httpOnly: true,
    path: "/",
    sameSite: "lax" as const,
    secure: false,
    maxAge: maxAgeSeconds
  };
}

export function clearSessionCookieOptions() {
  return {
    ...getSessionCookieOptions(0),
    maxAge: 0
  };
}
