'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { RentalsSchema, type RentalsFormValues } from '@/src/lib/validations/rentals';

type Mode = 'create' | 'edit' | 'view';

interface RentalsFormProps {
  mode: Mode;
  initialData?: RentalsFormValues;
}

export function RentalsForm({ mode, initialData }: RentalsFormProps) {
  const form = useForm<RentalsFormValues>({
    resolver: zodResolver(RentalsSchema),
    defaultValues: initialData ?? {
      rentalNumber: '',
      assetName: '',
      projectName: '',
      vendorName: '',
      status: 'active',
      startDate: '',
      endDate: '',
      dailyRate: '',
      totalCost: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: RentalsFormValues) => {
    console.log('rentals submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Rental #</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('rentalNumber')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Asset Name</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('assetName')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Project</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('projectName')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Vendor</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('vendorName')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Status</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('status')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Start Date</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('startDate')} readOnly={readOnly} placeholder="YYYY-MM-DD" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">End Date</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('endDate')} readOnly={readOnly} placeholder="YYYY-MM-DD" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Daily Rate</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('dailyRate')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Total Cost</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('totalCost')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Notes</label>
        <textarea className="min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('notes')} readOnly={readOnly} />
      </div>

      {mode !== 'view' && (
        <Button type="submit">
          {mode === 'create' ? 'Create' : 'Save Changes'}
        </Button>
      )}

    </form>
  );
}









