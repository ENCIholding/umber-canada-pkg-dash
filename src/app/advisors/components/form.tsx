"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/app/components/ui/button";
import { AdvisorsSchema, AdvisorsFormValues } from "@/lib/validations/advisors";

type Mode = "create" | "edit" | "view";

interface AdvisorsFormProps {
  mode: Mode;
  initialData?: AdvisorsFormValues;
}

export function AdvisorsForm({ mode, initialData }: AdvisorsFormProps) {
  const form = useForm<AdvisorsFormValues>({
    resolver: zodResolver(AdvisorsSchema),
    defaultValues: initialData ?? { name: "", status: "" },
  });

  const onSubmit = (values: AdvisorsFormValues) => {
    console.log("advisors submit", mode, values);
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

export const advisorsForm = AdvisorsForm;

