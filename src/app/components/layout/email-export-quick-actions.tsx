import React from "react";

interface EmailExportQuickActionsProps {
  module?: string;
  subject?: string;
}

export function EmailExportQuickActions({ module, subject }: EmailExportQuickActionsProps) {
  return (
    <div className="email-export-quick-actions rounded-lg border px-4 py-3 text-sm">
      Email/Export: {subject ?? module ?? "Quick actions"}
    </div>
  );
}

export default EmailExportQuickActions;







