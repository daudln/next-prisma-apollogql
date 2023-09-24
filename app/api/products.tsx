import prisma from "@/lib/db";

const GET = async (req: Request, res: Response) => {
  const employees = await prisma.employee.findMany();
  return res.json();
};
