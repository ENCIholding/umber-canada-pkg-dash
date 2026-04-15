import React from "react";

interface DashboardStatCardsProps {
  cards?: Array<{ label: string; value: string; helper?: string }>;
}

export function DashboardStatCards({ cards = [] }: DashboardStatCardsProps) {
  return (
    <div className="dashboard-stat-cards grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">{card.label}</div>
          <div className="mt-2 text-2xl font-semibold">{card.value}</div>
          {card.helper ? <div className="mt-1 text-xs text-muted-foreground">{card.helper}</div> : null}
        </div>
      ))}
    </div>
  );
}

export default DashboardStatCards;







