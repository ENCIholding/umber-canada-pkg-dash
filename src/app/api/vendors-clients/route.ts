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

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, error: "Missing vendor/client id." }, { status: 400 });
  }

  const store = getLocalDataStore();
  store.vendorClients = store.vendorClients.filter((record) => String(record.id) !== id);
  return NextResponse.json({ success: true, id });
}















