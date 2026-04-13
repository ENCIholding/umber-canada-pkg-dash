'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { TaxationSchema, type TaxationFormValues } from '@/src/lib/validations/taxation';

type Mode = 'create' | 'edit' | 'view';

interface TaxationFormProps {
  mode: Mode;
  initialData?: TaxationFormValues;
}

export function TaxationForm({ mode, initialData }: TaxationFormProps) {
  const form = useForm<TaxationFormValues>({
    resolver: zodResolver(TaxationSchema),
    defaultValues: initialData ?? {
      taxNumber: '',
      type: '',
      jurisdiction: '',
      projectName: '',
      status: 'pending',
      filingDate: '',
      dueDate: '',
      amount: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: TaxationFormValues) => {
    console.log('taxation submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <input {...form.register('taxNumber')} placeholder="Tax #" readOnly={readOnly} />
      <input {...form.register('type')} placeholder="Type (GST, Income, etc.)" readOnly={readOnly} />
      <input {...form.register('jurisdiction')} placeholder="Jurisdiction" readOnly={readOnly} />
      <input {...form.register('projectName')} placeholder="Project" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <input {...form.register('filingDate')} placeholder="Filing Date" readOnly={readOnly} />
      <input {...form.register('dueDate')} placeholder="Due Date" readOnly={readOnly} />
      <input {...form.register('amount')} placeholder="Amount" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}









