import { NextResponse } from "next/server";
import { getLocalDataStore } from "@/lib/local-data-store";

export async function GET() {
  const store = getLocalDataStore();
  return NextResponse.json(store.masterEntities);
}

export async function POST(req: Request) {
  const body = await req.json();
  const store = getLocalDataStore();
  const row = {
    id: crypto.randomUUID(),
    companyName: body.companyName,
    contactName: body.contactName || null,
    officePhone: body.officePhone || null,
    mobilePhone: body.mobilePhone || null,
    email: body.email || null,
    addressLine1: body.addressLine1 || null,
    city: body.city || null,
    province: body.province || null,
    postalCode: body.postalCode || null,
    country: body.country || "Canada",
    entityType: body.entityType,
    rating: body.rating ? Number(body.rating) : null,
    isActive: body.isActive ?? true,
    workAgain: body.workAgain ?? true,
    notes: body.notes || null,
    createdAt: new Date().toISOString()
  };
  store.masterEntities.unshift(row);
  return NextResponse.json(row);
}















