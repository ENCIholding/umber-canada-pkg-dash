"use client";

import { AppShell } from "@/components/layout/app-shell";
import { useState } from "react";

export default function DashboardPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function sendTestEmail() {
    setSending(true);
    setStatus("");

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        to: "umbercanadapkg@gmail.com",
        subject: "Dashboard Test Email",
        message: "This email was sent from the Umber Canada Dashboard!",
      }),
    });

    if (res.ok) {
      setStatus("Email sent successfully!");
    } else {
      setStatus("Failed to send email.");
    }

    setSending(false);
  }

  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Total Sales</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">$0.00</h3>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Payments Pending</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">$0.00</h3>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Active Projects</p>
          <h3 className="mt-2 text-3xl font-bold text-zinc-900">0</h3>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">
          Welcome to Umber Canada Dashboard
        </h2>
        <p className="mt-2 text-zinc-600">
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
          <p className="mt-3 text-sm text-zinc-700">
            {status}
          </p>
        )}
      </div>
    </AppShell>
  );
}















