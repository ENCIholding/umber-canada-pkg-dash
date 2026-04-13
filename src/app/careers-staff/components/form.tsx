'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { StaffSchema, type StaffFormValues } from '@/src/lib/validations/careers-staff';

type Mode = 'create' | 'edit' | 'view';

interface StaffFormProps {
  mode: Mode;
  initialData?: StaffFormValues;
}

export function StaffForm({ mode, initialData }: StaffFormProps) {
  const form = useForm<StaffFormValues>({
    resolver: zodResolver(StaffSchema),
    defaultValues: initialData ?? {
      name: '',
      role: '',
      department: '',
      email: '',
      phone: '',
      status: 'active',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: StaffFormValues) => {
    console.log('staff submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <input {...form.register('name')} placeholder="Name" readOnly={readOnly} />
      <input {...form.register('role')} placeholder="Role" readOnly={readOnly} />
      <input {...form.register('department')} placeholder="Department" readOnly={readOnly} />
      <input {...form.register('email')} placeholder="Email" readOnly={readOnly} />
      <input {...form.register('phone')} placeholder="Phone" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}









