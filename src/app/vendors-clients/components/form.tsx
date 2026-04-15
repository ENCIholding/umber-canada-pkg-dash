'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "@/app/components/ui/button";
import { VendorsClientsSchema, type VendorsClientsFormValues } from '@/lib/validations/vendors-clients';

type Mode = 'create' | 'edit' | 'view';

export function VendorsClientsForm({ mode, initialData }: any) {
  const form = useForm<VendorsClientsFormValues>({
    resolver: zodResolver(VendorsClientsSchema),
    defaultValues: initialData ?? {
      name: '',
      type: '',
      email: '',
      phone: '',
      company: '',
      status: 'active',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  return (
    <form className="space-y-4">
      <input {...form.register('name')} placeholder="Name" readOnly={readOnly} />
      <input {...form.register('type')} placeholder="Vendor / Client" readOnly={readOnly} />
      <input {...form.register('email')} placeholder="Email" readOnly={readOnly} />
      <input {...form.register('phone')} placeholder="Phone" readOnly={readOnly} />
      <input {...form.register('company')} placeholder="Company" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}













