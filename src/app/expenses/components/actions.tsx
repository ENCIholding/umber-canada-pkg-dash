'use client';

import Link from 'next/link';
import Button from "@/app/components/ui/button";

export function ExpensesActions({ basePath }: { basePath: string }) {
  return (
    <Button asChild>
      <Link href={basePath + '/new'}>New</Link>
    </Button>
  );
}












