import React from "react";
import Link from "next/link";

interface ModuleHomeLinksProps {
  basePath?: string;
}

export function ModuleHomeLinks({ basePath = "/" }: ModuleHomeLinksProps) {
  return (
    <nav className="module-home-links mt-6 flex gap-3 text-sm">
      <Link className="rounded-md border px-3 py-2" href={basePath}>
        Home
      </Link>
      <Link className="rounded-md border px-3 py-2" href={`${basePath}/new`}>
        New record
      </Link>
    </nav>
  );
}

export default ModuleHomeLinks;







