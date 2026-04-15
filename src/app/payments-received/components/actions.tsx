'use client';

import Link from 'next/link';
import Button from "@/app/components/ui/button";

interface PaymentsReceivedActionsProps {
  basePath: string;
}

export function PaymentsReceivedActions({ basePath }: PaymentsReceivedActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button asChild>
        <Link href={basePath + '/new'}>New</Link>
      </Button>
    </div>
  );
}












