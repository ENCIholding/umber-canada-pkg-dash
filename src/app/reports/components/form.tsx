'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { ReportsSchema, type ReportsFormValues } from '@/src/lib/validations/reports';

type Mode = 'create' | 'edit' | 'view';

interface ReportsFormProps {
  mode: Mode;
  initialData?: ReportsFormValues;
}

export function ReportsForm({ mode, initialData }: ReportsFormProps) {
  const form = useForm<ReportsFormValues>({
    resolver: zodResolver(ReportsSchema),
    defaultValues: initialData ?? {
      reportName: '',
      category: '',
      scope: '',
      format: 'pdf',
      status: 'draft',
      owner: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: ReportsFormValues) => {
    console.log('reports submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <input {...form.register('reportName')} placeholder="Report Name" readOnly={readOnly} />
      <input {...form.register('category')} placeholder="Category" readOnly={readOnly} />
      <input {...form.register('scope')} placeholder="Scope" readOnly={readOnly} />
      <input {...form.register('format')} placeholder="Format" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <input {...form.register('owner')} placeholder="Owner" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}









