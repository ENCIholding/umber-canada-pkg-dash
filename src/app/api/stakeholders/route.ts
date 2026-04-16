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

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, error: "Missing stakeholder id." }, { status: 400 });
  }

  const store = getLocalDataStore();
  store.stakeholders = store.stakeholders.filter((stakeholder) => String(stakeholder.id) !== id);
  return NextResponse.json({ success: true, id });
}















