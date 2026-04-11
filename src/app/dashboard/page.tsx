"use client";

import { AppShell } from "@/components/layout/app-shell";
import { useState } from "react";

export default function DashboardPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function sendTestEmail() {
    try {
      setSending(true);
      setStatus("");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "umbercanadapkg@gmail.com",
          subject: "Dashboard Test Email",
          message: "This email was sent from the Umber Canada Dashboard!",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "Email sent successfully!");
      } else {
        setStatus(data.message || "Failed to send email.");
      }
    } catch {
      setStatus("Failed to send email.");
    } finally {
      setSending(false);
    }
  }

  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Sales</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">$0.00</h3>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Payments Pending</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">$0.00</h3>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Active Projects</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">0</h3>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 dark:ring-1 dark:ring-white/10">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Welcome to Umber Canada Dashboard
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Authentication, shell layout, and protected-entry foundation are now in place.
        </p>

        <button
          onClick={sendTestEmail}
          disabled={sending}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-300"
        >
          {sending ? "Sending..." : "Send Test Email"}
        </button>

        {status && (
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
            {status}
          </p>
        )}
      </div>
    </AppShell>
  );
}