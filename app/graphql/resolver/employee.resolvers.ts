import prisma from "@/lib/db";
import { EmployeeDTO, employeeSchema } from "../dto/schema";
import { GraphQLError } from "graphql";
export async function getAllEmployees() {
  return await prisma.employee.findMany();
}
export async function getEmployee(unique_id: string) {
  return await prisma.employee.findUnique({ where: { unique_id } });
}

export async function createEmployee(body: EmployeeDTO) {
  const validation = employeeSchema.safeParse(body);
  if (!validation.success) {
    throw new GraphQLError("Invalid data supplied", {
      extensions: {
        code: "BAD REQUEST",
        http: { status: 400 },
        errors: validation.error.errors,
      },
    });
  }

  const user = await prisma.employee.findUnique({
    where: { email: body.email },
  });
  if (user)
    throw new GraphQLError("User already exist", {
      extensions: {
        code: "BAD REQUEST",
        http: { status: 400 },
      },
    });
  return;
}
