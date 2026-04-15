import { NextResponse } from "next/server";
import { getLocalDataStore } from "@/lib/local-data-store";

export async function GET() {
  const store = getLocalDataStore();
  return NextResponse.json(store.vendorClients);
}

export async function POST(req: Request) {
  const body = await req.json();
  const store = getLocalDataStore();
  const masterEntity = store.masterEntities.find((entity) => entity.id === body.masterEntityId) ?? null;
  const row = {
    id: crypto.randomUUID(),
    masterEntityId: body.masterEntityId,
    category: body.category,
    projectType: body.projectType || null,
    creditTerms: body.creditTerms || null,
    paymentPattern: body.paymentPattern || null,
    masterEntity,
    createdAt: new Date().toISOString()
  };
  store.vendorClients.unshift(row);
  return NextResponse.json(row);
}















