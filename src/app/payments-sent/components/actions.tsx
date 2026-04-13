'use client';

import Link from 'next/link';
import { Button } from "@/src/app/components/ui/button";

interface PaymentsSentActionsProps {
  basePath: string;
}

export function PaymentsSentActions({ basePath }: PaymentsSentActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button asChild>
        <Link href={basePath + '/new'}>New</Link>
      </Button>
    </div>
  );
}








