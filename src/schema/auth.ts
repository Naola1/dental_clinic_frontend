import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be greater that 6 characters",
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string({
      required_error: "Email is required",
    }),
    username: z.string({
      required_error: "Username is required",
    }),

    password: z.string().min(6, {
      message: "Password must be greater that 6 characters",
    }),

    confirmPassword: z.string().min(6, {
      message: "Confirm password must be greater that 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });
