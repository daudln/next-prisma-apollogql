import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  position: z.string(),
});

export type EmployeeDTO = z.infer<typeof employeeSchema>;

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 characters" }),
});

export type UserDTO = z.infer<typeof userSchema>;
