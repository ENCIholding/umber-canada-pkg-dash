import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const rows = await prisma.vendorClient.findMany({
    include: { masterEntity: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();

  const row = await prisma.vendorClient.create({
    data: {
      masterEntityId: body.masterEntityId,
      category: body.category,
      projectType: body.projectType || null,
      creditTerms: body.creditTerms || null,
      paymentPattern: body.paymentPattern || null,
    },
    include: { masterEntity: true },
  });

  return NextResponse.json(row);
}











