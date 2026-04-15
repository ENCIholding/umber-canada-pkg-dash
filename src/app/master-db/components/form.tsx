"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/app/components/ui/button";
import { MasterDbSchema, MasterDbFormValues } from "@/lib/validations/master-db";

type Mode = "create" | "edit" | "view";

interface MasterDbFormProps {
  mode: Mode;
  initialData?: MasterDbFormValues;
}

export function MasterDbForm({ mode, initialData }: MasterDbFormProps) {
  const form = useForm<MasterDbFormValues>({
    resolver: zodResolver(MasterDbSchema),
    defaultValues: initialData ?? { name: "", status: "" },
  });

  const onSubmit = (values: MasterDbFormValues) => {
    console.log("master-db submit", mode, values);
  };

  const readOnly = mode === "view";

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register("name")}
          readOnly={readOnly}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
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

export const masterdbForm = MasterDbForm;

