"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PageActions() {
  const router = useRouter();

  return (
    <div
      className={cn(
        "w-full border-b px-4 py-3 flex items-center gap-3",
        "bg-gradient-to-r from-zinc-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900",
        "shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.4)]"
      )}
    >
      <Button variant="default" className="hover:scale-[1.03] transition-transform">
        Add Record
      </Button>

      <Button variant="destructive" className="hover:scale-[1.03] transition-transform">
        Delete Record
      </Button>

      <Button variant="secondary" onClick={() => router.back()} className="hover:scale-[1.03] transition-transform">
        Back
      </Button>

      <Button variant="secondary" onClick={() => router.forward()} className="hover:scale-[1.03] transition-transform">
        Next
      </Button>

      <Button variant="outline" className="hover:scale-[1.03] transition-transform">
        Send Email
      </Button>

      <Button variant="outline" className="hover:scale-[1.03] transition-transform">
        Upload File
      </Button>

      <Button variant="outline" className="hover:scale-[1.03] transition-transform">
        Export File
      </Button>

      <Button variant="outline" className="hover:scale-[1.03] transition-transform">
        Add to Calendar
      </Button>
    </div>
  );
}

async function handleSendEmail() {
  const to = prompt("Enter recipient email:");
  const subject = prompt("Enter subject:");
  const message = prompt("Enter message:");

  if (!to || !subject || !message) {
    alert("Email cancelled.");
    return;
  }

  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, subject, message }),
  });

  if (res.ok) {
    alert("Email sent successfully!");
  } else {
    alert("Failed to send email.");
  }
}
