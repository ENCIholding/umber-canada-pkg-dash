"use client";

import Link from "next/link";
import { Button } from "@/src/app/components/ui/button";

interface projectsActionsProps {
  basePath: string;
}

export function projectsActions({ basePath }: projectsActionsProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button asChild variant="default">
        <Link href={basePath + "/new"}>New</Link>
      </Button>
    </div>
  );
}








