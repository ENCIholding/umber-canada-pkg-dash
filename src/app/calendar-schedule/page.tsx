"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarEventModal } from "@/components/calendar/event-modal";

const COLORS: Record<string, string> = {
  vendor: "bg-blue-500",
  stakeholder: "bg-green-500",
  foot_traffic: "bg-orange-500",
  builder: "bg-purple-500",
  retail: "bg-pink-500",
  other: "bg-gray-500"
};

export default function CalendarSchedule() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function loadEvents() {
    const res = await fetch("/api/calendar/events");
    const data = await res.json();
    setEvents(data);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Calendar Schedule</h1>
        <Button onClick={() => setModalOpen(true)}>New Event</Button>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {events.map((ev: any) => (
          <div key={ev.id} className="p-3 rounded-lg shadow bg-zinc-900 text-white">
            <div className="flex items-center gap-2">
              <span className={"w-3 h-3 rounded-full " + (COLORS[ev.type] || COLORS.other)}></span>
              <h2 className="font-semibold">{ev.title}</h2>
            </div>
            <p className="text-sm mt-1">{new Date(ev.date).toDateString()}</p>
            <p className="text-sm">{ev.time}</p>
            <p className="text-xs mt-2 opacity-70">{ev.notes}</p>
          </div>
        ))}
      </div>

      <CalendarEventModal open={modalOpen} onOpenChange={setModalOpen} onCreated={loadEvents} />
    </div>
  );
}


