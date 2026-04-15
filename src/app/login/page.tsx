"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DEV_AUTH } from "@/lib/auth/session";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget as HTMLFormElement);
    const username = String(form.get("username") || "");
    const password = String(form.get("password") || "");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({ error: "Sign-in failed." }));
      setError(payload.error || "Sign-in failed.");
      setIsSubmitting(false);
      return;
    }

    const from = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("from") : null;
    router.push(from || "/dashboard");
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Umber Canada</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Flooring operations command center</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Use one internal workspace for procurement, shipments, receiving, finance, projects, reports,
            vendors, and stakeholder follow-through.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <div className="text-sm font-semibold">Operations</div>
              <div className="mt-1 text-sm text-muted-foreground">Procurement, shipments, receiving, deliveries, projects</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm font-semibold">Finance</div>
              <div className="mt-1 text-sm text-muted-foreground">Payments, expenses, rentals, taxation, reporting</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm font-semibold">CRM</div>
              <div className="mt-1 text-sm text-muted-foreground">Vendors, clients, stakeholders, advisors, pipeline</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm font-semibold">Support</div>
              <div className="mt-1 text-sm text-muted-foreground">Files, email, compliance, staffing, master records</div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Development access is enabled for local testing.
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Username</span>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                name="username"
                defaultValue={DEV_AUTH.username}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Password</span>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                name="password"
                type="password"
                defaultValue={DEV_AUTH.password}
              />
            </label>
            {error ? (
              <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            ) : null}
            <button
              className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Signing In..." : "Enter Dashboard"}
            </button>
          </form>
          <div className="mt-4 text-xs text-muted-foreground">
            Local credentials: <span className="font-semibold">{DEV_AUTH.username}</span> /{" "}
            <span className="font-semibold">{DEV_AUTH.password}</span>.
          </div>
          <Link className="mt-6 inline-flex text-sm text-muted-foreground underline-offset-4 hover:underline" href="/">
            Back to home
          </Link>
        </section>
      </div>
    </main>
  );
}







