import { NextResponse } from "next/server";
import { getCalendarEventsStore } from "@/lib/calendar-store";

export async function PATCH(req: Request, { params }: any) {
  try {
    const body = await req.json();
    const events = getCalendarEventsStore();
    const index = events.findIndex((event) => event.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    const updated = {
      ...events[index],
      ...body
    };
    events[index] = updated;

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: any) {
  try {
    const events = getCalendarEventsStore();
    const index = events.findIndex((event) => event.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    events.splice(index, 1);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}















