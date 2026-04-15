import { NextResponse } from "next/server";
import { getCalendarEventsStore } from "@/lib/calendar-store";

export async function GET() {
  const events = getCalendarEventsStore();
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const data = await req.json();
  const events = getCalendarEventsStore();
  const event = {
    id: crypto.randomUUID(),
    title: data.title ?? "Untitled event",
    start: data.start ?? new Date().toISOString(),
    end: data.end ?? new Date().toISOString()
  };
  events.push(event);
  return NextResponse.json(event);
}















