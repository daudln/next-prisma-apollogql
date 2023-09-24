import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const employees = await prisma.employee.findMany();
  return NextResponse.json({
    status: "OK",
    data: employees,
  });
};
