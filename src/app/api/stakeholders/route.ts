import { NextResponse } from "next/server";
import { getLocalDataStore } from "@/lib/local-data-store";

export async function GET() {
  const store = getLocalDataStore();
  return NextResponse.json(store.stakeholders);
}

export async function POST(req: Request) {
  const body = await req.json();
  const store = getLocalDataStore();
  const masterEntity = store.masterEntities.find((entity) => entity.id === body.masterEntityId) ?? null;
  const row = {
    id: crypto.randomUUID(),
    masterEntityId: body.masterEntityId,
    productCategory: body.productCategory || null,
    relationshipStart: body.relationshipStart || null,
    complianceStatus: body.complianceStatus || null,
    currency: body.currency || null,
    exchangeRate: body.exchangeRate ? Number(body.exchangeRate) : null,
    masterEntity,
    createdAt: new Date().toISOString()
  };
  store.stakeholders.unshift(row);
  return NextResponse.json(row);
}















