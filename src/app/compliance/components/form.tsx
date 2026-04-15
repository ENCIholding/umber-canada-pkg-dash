'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "@/app/components/ui/button";
import { ComplianceSchema, type ComplianceFormValues } from '@/lib/validations/compliance';

type Mode = 'create' | 'edit' | 'view';

interface ComplianceFormProps {
  mode: Mode;
  initialData?: ComplianceFormValues;
}

export function ComplianceForm({ mode, initialData }: ComplianceFormProps) {
  const form = useForm<ComplianceFormValues>({
    resolver: zodResolver(ComplianceSchema),
    defaultValues: initialData ?? {
      recordNumber: '',
      category: '',
      authority: '',
      projectName: '',
      status: 'pending',
      dueDate: '',
      completedDate: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: ComplianceFormValues) => {
    console.log('compliance submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <input {...form.register('recordNumber')} placeholder="Record #" readOnly={readOnly} />
      <input {...form.register('category')} placeholder="Category" readOnly={readOnly} />
      <input {...form.register('authority')} placeholder="Authority" readOnly={readOnly} />
      <input {...form.register('projectName')} placeholder="Project" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <input {...form.register('dueDate')} placeholder="Due Date" readOnly={readOnly} />
      <input {...form.register('completedDate')} placeholder="Completed Date" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}













