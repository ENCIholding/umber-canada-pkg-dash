"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/app/components/ui/button";
import { calendarSchema, calendarFormValues } from "@/src/lib/validations/calendar";

type Mode = "create" | "edit" | "view";

interface calendarFormProps {
  mode: Mode;
  initialData?: calendarFormValues;
}

export function calendarForm({ mode, initialData }: calendarFormProps) {
  const form = useForm<calendarFormValues>({
    resolver: zodResolver(calendarSchema),
    defaultValues: initialData ?? { name: "", status: "" },
  });

  const onSubmit = (values: calendarFormValues) => {
    console.log("calendar submit", mode, values);
  };

  const readOnly = mode === "view";

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          className="w-full rounded border bg-background px-3 py-2 text-sm"
          {...form.register("name")}
          readOnly={readOnly}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <input
          className="w-full rounded border bg-background px-3 py-2 text-sm"
          {...form.register("status")}
          readOnly={readOnly}
        />
      </div>
      {mode !== "view" && (
        <Button type="submit" variant="default">
          {mode === "create" ? "Create" : "Save changes"}
        </Button>
      )}
    </form>
  );
}