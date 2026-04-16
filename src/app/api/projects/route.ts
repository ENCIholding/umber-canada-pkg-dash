import { NextResponse } from "next/server";
import { getLocalDataStore } from "@/lib/local-data-store";

export async function GET() {
  const store = getLocalDataStore();
  return NextResponse.json(store.projects);
}

export async function POST(req: Request) {
  const body = await req.json();
  const store = getLocalDataStore();
  const row = {
    id: crypto.randomUUID(),
    projectNumber: body.projectNumber,
    projectName: body.projectName,
    addressLine1: body.addressLine1 || null,
    city: body.city || null,
    province: body.province || null,
    postalCode: body.postalCode || null,
    outOfProvince: body.outOfProvince ?? false,
    status: body.status,
    startDate: body.startDate || null,
    estimatedEndDate: body.estimatedEndDate || null,
    notes: body.notes || null,
    stakeholderId: body.stakeholderId || null,
    vendorClientId: body.vendorClientId || null,
    createdAt: new Date().toISOString()
  };
  store.projects.unshift(row);
  return NextResponse.json(row);
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, error: "Missing project id." }, { status: 400 });
  }

  const store = getLocalDataStore();
  store.projects = store.projects.filter((project) => String(project.id) !== id);
  return NextResponse.json({ success: true, id });
}















