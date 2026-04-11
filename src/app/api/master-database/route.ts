import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const rows = await prisma.masterEntity.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();

  const row = await prisma.masterEntity.create({
    data: {
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
    },
  });

  return NextResponse.json(row);
}
