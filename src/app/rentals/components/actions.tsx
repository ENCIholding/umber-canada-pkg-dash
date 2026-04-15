'use client';

import Link from 'next/link';
import Button from "@/app/components/ui/button";

export function RentalsActions({ basePath }: { basePath: string }) {
  return (
    <Button asChild>
      <Link href={basePath + '/new'}>New</Link>
    </Button>
  );
}












