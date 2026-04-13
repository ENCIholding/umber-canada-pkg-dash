import React from "react";

export default function PrintViewWrapper({ children }: { children: React.ReactNode }) {
  return <div className="print-view-wrapper">{children}</div>;
}



