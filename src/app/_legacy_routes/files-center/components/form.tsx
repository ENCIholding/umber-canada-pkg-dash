"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/app/components/ui/button";
import { filescenterSchema, filescenterFormValues } from "@/src/lib/validations/files-center";

type Mode = "create" | "edit" | "view";

interface filescenterFormProps {
  mode: Mode;
  initialData?: filescenterFormValues;
}

export function filescenterForm({ mode, initialData }: filescenterFormProps) {
  const form = useForm<filescenterFormValues>({
    resolver: zodResolver(filescenterSchema),
    defaultValues: initialData ?? { name: "", status: "" },
  });

  const onSubmit = (values: filescenterFormValues) => {
    console.log("files-center submit", mode, values);
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