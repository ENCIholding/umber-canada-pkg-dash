"use client";

import Link from "next/link";
import Button from "@/app/components/ui/button";

interface receivingActionsProps {
  basePath: string;
}

export function receivingActions({ basePath }: receivingActionsProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button asChild variant="default">
        <Link href={basePath + "/new"}>New</Link>
      </Button>
    </div>
  );
}












