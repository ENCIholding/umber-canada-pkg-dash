"use client";

import Link from "next/link";
import Button from "@/app/components/ui/button";

interface complianceActionsProps {
  basePath: string;
}

export function complianceActions({ basePath }: complianceActionsProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button asChild variant="default">
        <Link href={basePath + "/new"}>New</Link>
      </Button>
    </div>
  );
}












