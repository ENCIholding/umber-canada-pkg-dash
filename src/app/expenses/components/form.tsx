'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/src/app/components/ui/button";
import { ExpensesSchema, type ExpensesFormValues } from '@/src/lib/validations/expenses';

type Mode = 'create' | 'edit' | 'view';

interface ExpensesFormProps {
  mode: Mode;
  initialData?: ExpensesFormValues;
}

export function ExpensesForm({ mode, initialData }: ExpensesFormProps) {
  const form = useForm<ExpensesFormValues>({
    resolver: zodResolver(ExpensesSchema),
    defaultValues: initialData ?? {
      expenseNumber: '',
      vendorName: '',
      projectName: '',
      category: '',
      status: 'draft',
      expenseDate: '',
      amount: '',
      receiptRef: '',
      notes: '',
    },
  });

  const readOnly = mode === 'view';

  const onSubmit = (values: ExpensesFormValues) => {
    console.log('expenses submit', mode, values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Expense #</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('expenseNumber')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Vendor</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('vendorName')} readOnly={readOnly} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Project</label>
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
        <label className="mb-1 block text-sm font-medium text-foreground">Expense Date</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('expenseDate')} readOnly={readOnly} placeholder="YYYY-MM-DD" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Amount</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('amount')} readOnly={readOnly} placeholder="0.00" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Receipt Ref</label>
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" {...form.register('receiptRef')} readOnly={readOnly} />
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









