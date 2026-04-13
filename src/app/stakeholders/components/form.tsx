'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { StakeholdersSchema, type StakeholdersFormValues } from '@/src/lib/validations/stakeholders';

type Mode = 'create' | 'edit' | 'view';

export function StakeholdersForm({ mode, initialData }: any) {
  const form = useForm<StakeholdersFormValues>({
    resolver: zodResolver(StakeholdersSchema),
    defaultValues: initialData ?? {
      name: '',
      role: '',
      organization: '',
      email: '',
      phone: '',
      status: 'active',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  return (
    <form className="space-y-4">
      <input {...form.register('name')} placeholder="Name" readOnly={readOnly} />
      <input {...form.register('role')} placeholder="Role" readOnly={readOnly} />
      <input {...form.register('organization')} placeholder="Organization" readOnly={readOnly} />
      <input {...form.register('email')} placeholder="Email" readOnly={readOnly} />
      <input {...form.register('phone')} placeholder="Phone" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}









