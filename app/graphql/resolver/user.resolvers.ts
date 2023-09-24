import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import { UserDTO, userSchema } from "../dto/schema";
import { GraphQLError } from "graphql";

export async function createUser(inputs: UserDTO) {
  const validation = userSchema.safeParse(inputs);
  if (!validation.success)
    throw new GraphQLError("Invalid data provided", {
      extensions: {
        code: "BAD REQUEST",
        http: { status: 400 },
        errors: validation.error.errors,
      },
    });
  const { email, name, password } = inputs;
  const user = await prisma.user.findUnique({ where: { email } });
  if (user)
    throw new GraphQLError("User with this email already exist", {
      extensions: {
        code: "BAD REQUEST",
        http: { status: 400 },
      },
    });
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: hashedPassword,
    },
  });
}
