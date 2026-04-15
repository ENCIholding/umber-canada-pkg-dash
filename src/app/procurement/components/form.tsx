'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "@/app/components/ui/button";
import { ProcurementSchema, type ProcurementFormValues } from '@/lib/validations/procurement';

type Mode = 'create' | 'edit' | 'view';

interface ProcurementFormProps {
  mode: Mode;
  initialData?: ProcurementFormValues;
}

export function ProcurementForm({ mode, initialData }: ProcurementFormProps) {
  const form = useForm<ProcurementFormValues>({
    resolver: zodResolver(ProcurementSchema),
    defaultValues: initialData ?? {
      poNumber: '',
      vendorName: '',
      projectName: '',
      status: 'draft',
      orderDate: '',
      expectedDate: '',
      totalAmount: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: ProcurementFormValues) => {
    console.log('procurement submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">PO Number</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('poNumber')}
          readOnly={readOnly}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Vendor Name</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('vendorName')}
          readOnly={readOnly}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Project Name</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('projectName')}
          readOnly={readOnly}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Status</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('status')}
          readOnly={readOnly}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Order Date</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('orderDate')}
          readOnly={readOnly}
          placeholder="YYYY-MM-DD"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Expected Date</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('expectedDate')}
          readOnly={readOnly}
          placeholder="YYYY-MM-DD"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Total Amount</label>
        <input
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('totalAmount')}
          readOnly={readOnly}
          placeholder="0.00"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Notes</label>
        <textarea
          className="min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm"
          {...form.register('notes')}
          readOnly={readOnly}
        />
      </div>

      {mode !== 'view' && (
        <Button type="submit">
          {mode === 'create' ? 'Create' : 'Save Changes'}
        </Button>
      )}
    </form>
  );
}













