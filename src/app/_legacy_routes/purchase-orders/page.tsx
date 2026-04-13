import { AppShell } from "@/src/app/components/layout/app-shell";
import { PageActions } from "@/src/app/components/layout/page-actions";
import { getpurchaseordersList } from "@/src/lib/services/purchase-orders";

export default async function Page() {
  const data = await getpurchaseordersList();
  return (
    <AppShell title="purchase-orders" subtitle="purchase-orders overview">
      <PageActions title="purchase-orders" />
      <div className="mt-4">
        <pre className="text-xs text-muted-foreground">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </AppShell>
  );
}