import React from "react";

interface PageActionsProps {
  title?: string;
}

export function PageActions({ title }: PageActionsProps) {
  return (
    <div className="page-actions flex items-center justify-between rounded-lg border px-4 py-3">
      <span className="text-sm font-medium">{title ? `${title} actions` : "Actions"}</span>
    </div>
  );
}

export default PageActions;







