import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const rows = await prisma.project.findMany({
    include: {
      stakeholder: {
        include: { masterEntity: true },
      },
      vendorClient: {
        include: { masterEntity: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();

  const row = await prisma.project.create({
    data: {
      projectNumber: body.projectNumber,
      projectName: body.projectName,
      addressLine1: body.addressLine1 || null,
      city: body.city || null,
      province: body.province || null,
      postalCode: body.postalCode || null,
      outOfProvince: body.outOfProvince ?? false,
      status: body.status,
      startDate: body.startDate ? new Date(body.startDate) : null,
      estimatedEndDate: body.estimatedEndDate ? new Date(body.estimatedEndDate) : null,
      notes: body.notes || null,
      stakeholderId: body.stakeholderId || null,
      vendorClientId: body.vendorClientId || null,
    },
  });

  return NextResponse.json(row);
}
