"use client";

import Link from "next/link";
import { Button } from "@/src/app/components/ui/button";

interface deliveriesActionsProps {
  basePath: string;
}

export function deliveriesActions({ basePath }: deliveriesActionsProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button asChild variant="default">
        <Link href={basePath + "/new"}>New</Link>
      </Button>
    </div>
  );
}








