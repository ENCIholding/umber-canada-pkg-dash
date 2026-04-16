"use client";

import { useState } from "react";

export function EmailComposer() {
  const [to, setTo] = useState("ksharma06rsbc@gmail.com");
  const [subject, setSubject] = useState("Umber Canada operations update");
  const [body, setBody] = useState("Hello,\n\nPlease find the latest update attached / summarized below.\n\nRegards,\nUmber Canada");
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, message: body })
    });

    const payload = await response.json().catch(() => ({ success: false }));
    setSending(false);
    setStatus(response.ok && payload.success ? "Email sent successfully." : payload.error || "Email failed to send.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border p-5">
      <div className="text-lg font-semibold">Draft email</div>
      <div className="mt-1 text-sm text-muted-foreground">Compose and send a real outbound message from inside the system.</div>

      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Recipient</span>
          <input value={to} onChange={(e) => setTo(e.target.value)} type="email" className="rounded-md border px-3 py-2" />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Subject</span>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-md border px-3 py-2" />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Body</span>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={8} className="rounded-md border px-3 py-2" />
        </label>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button type="submit" disabled={sending} className="rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-accent disabled:opacity-60">
          {sending ? "Sending..." : "Send email"}
        </button>
        {status ? <div className="text-sm text-muted-foreground">{status}</div> : null}
      </div>
    </form>
  );
}
