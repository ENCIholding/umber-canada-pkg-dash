export type CalendarEventRecord = {
  id: string;
  title: string;
  start: string;
  end: string;
};

const globalForCalendar = globalThis as typeof globalThis & {
  calendarEvents?: CalendarEventRecord[];
};

const defaultEvents: CalendarEventRecord[] = [
  {
    id: "1",
    title: "Site walkthrough",
    start: new Date().toISOString(),
    end: new Date(Date.now() + 60 * 60 * 1000).toISOString()
  }
];

export function getCalendarEventsStore() {
  if (!globalForCalendar.calendarEvents) {
    globalForCalendar.calendarEvents = [...defaultEvents];
  }

  return globalForCalendar.calendarEvents;
}
