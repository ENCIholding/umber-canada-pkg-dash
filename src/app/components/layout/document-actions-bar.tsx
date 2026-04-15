import React from "react";

interface DocumentActionsBarProps {
  entityName?: string;
}

export function DocumentActionsBar({ entityName }: DocumentActionsBarProps) {
  return (
    <div className="document-actions-bar rounded-lg border px-4 py-3 text-sm">
      Document actions for {entityName ?? "record"}
    </div>
  );
}

export default DocumentActionsBar;







