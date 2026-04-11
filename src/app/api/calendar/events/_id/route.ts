import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request, { params }: any) {
  const body = await req.json();
  const updated = await prisma.calendarEvent.update({
    where: { id: Number(params.id) },
    data: body
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: any) {
  await prisma.calendarEvent.delete({
    where: { id: Number(params.id) }
  });
  return NextResponse.json({ success: true });
}
