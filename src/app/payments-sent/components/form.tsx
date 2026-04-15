'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "@/app/components/ui/button";
import { PaymentsSentSchema, type PaymentsSentFormValues } from '@/lib/validations/payments-sent';

type Mode = 'create' | 'edit' | 'view';

interface PaymentsSentFormProps {
  mode: Mode;
  initialData?: PaymentsSentFormValues;
}

export function PaymentsSentForm({ mode, initialData }: PaymentsSentFormProps) {
  const form = useForm<PaymentsSentFormValues>({
    resolver: zodResolver(PaymentsSentSchema),
    defaultValues: initialData ?? {
      paymentNumber: '',
      payeeName: '',
      projectName: '',
      category: '',
      status: 'draft',
      paymentDate: '',
      amount: '',
      method: '',
      referenceNumber: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: PaymentsSentFormValues) => {
    console.log('payments-sent submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Payment Number</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('paymentNumber')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Payee Name</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('payeeName')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Project Name</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('projectName')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Category</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('category')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Status</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('status')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Payment Date</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('paymentDate')} readOnly={readOnly} placeholder="YYYY-MM-DD" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Amount</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('amount')} readOnly={readOnly} placeholder="0.00" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Method</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('method')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Reference Number</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('referenceNumber')} readOnly={readOnly} />
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













