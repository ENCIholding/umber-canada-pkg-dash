"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CalendarEventModal({ open, onOpenChange, onCreated }: any) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("vendor");
  const [notes, setNotes] = useState("");

  if (!open) return null;

  async function createEvent() {
    const res = await fetch("/api/calendar/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, time, type, notes })
    });

    if (res.ok) {
      onCreated();
      onOpenChange(false);
    } else {
      alert("Failed to create event.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">New Event</h2>

        <div className="space-y-3">
          <input className="w-full p-2 rounded bg-zinc-800" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <input type="date" className="w-full p-2 rounded bg-zinc-800" value={date} onChange={e => setDate(e.target.value)} />
          <input type="time" className="w-full p-2 rounded bg-zinc-800" value={time} onChange={e => setTime(e.target.value)} />

          <select className="w-full p-2 rounded bg-zinc-800" value={type} onChange={e => setType(e.target.value)}>
            <option value="vendor">Vendor</option>
            <option value="stakeholder">Stakeholder</option>
            <option value="foot_traffic">Foot Traffic</option>
            <option value="builder">Builder</option>
            <option value="retail">Retail</option>
            <option value="other">Other</option>
          </select>

          <textarea className="w-full p-2 rounded bg-zinc-800" placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={createEvent}>Create</Button>
        </div>
      </div>
    </div>
  );
}


