'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { FileSchema, type FileFormValues } from '@/src/lib/validations/file-center';

type Mode = 'create' | 'edit' | 'view';

interface FileFormProps {
  mode: Mode;
  initialData?: FileFormValues;
}

export function FileForm({ mode, initialData }: FileFormProps) {
  const form = useForm<FileFormValues>({
    resolver: zodResolver(FileSchema),
    defaultValues: initialData ?? {
      fileName: '',
      category: '',
      linkedTo: '',
      projectName: '',
      status: 'active',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: FileFormValues) => {
    console.log('file submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <input {...form.register('fileName')} placeholder="File Name" readOnly={readOnly} />
      <input {...form.register('category')} placeholder="Category" readOnly={readOnly} />
      <input {...form.register('linkedTo')} placeholder="Linked To (PO / Project / Client)" readOnly={readOnly} />
      <input {...form.register('projectName')} placeholder="Project" readOnly={readOnly} />
      <input {...form.register('status')} placeholder="Status" readOnly={readOnly} />
      <textarea {...form.register('notes')} placeholder="Notes" readOnly={readOnly} />

      {mode !== 'view' && <Button type="submit">Save</Button>}
    </form>
  );
}









