import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const customers = await prisma.customer.findMany();
  return NextResponse.json({
    status: "OK",
    data: JSON.stringify(customers),
  });
};
