import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const rows = await prisma.stakeholder.findMany({
    include: { masterEntity: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();

  const row = await prisma.stakeholder.create({
    data: {
      masterEntityId: body.masterEntityId,
      productCategory: body.productCategory || null,
      relationshipStart: body.relationshipStart ? new Date(body.relationshipStart) : null,
      complianceStatus: body.complianceStatus || null,
      currency: body.currency || null,
      exchangeRate: body.exchangeRate ? Number(body.exchangeRate) : null,
    },
    include: { masterEntity: true },
  });

  return NextResponse.json(row);
}


