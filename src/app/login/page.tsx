"use client";

import { useState } from "react";
import {
  APP_COPYRIGHT,
  APP_LICENSE_NAME,
  APP_ACCESS_NOTICE,
} from "@/lib/constants/app";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed.");
        setLoading(false);
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setError("Unable to reach the login service.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="text-center text-3xl font-bold tracking-tight">
          Umber Canada
        </h1>
        <p className="mt-2 text-center text-sm text-zinc-400">
          Internal dashboard access
        </p>

        <div className="mt-8 space-y-3">
          <input
            placeholder="Username"
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error ? (
            <p className="text-sm text-red-400">{error}</p>
          ) : null}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-zinc-500">
          <p>{APP_LICENSE_NAME}</p>
          <p>{APP_COPYRIGHT}</p>
          <p>{APP_ACCESS_NOTICE}</p>
        </div>
      </div>
    </div>
  );
}
