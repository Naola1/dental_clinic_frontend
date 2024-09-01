import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }),
  username: z.string({
    required_error: "Username is required",
  }),

  password: z.string({
    required_error: "Password is required",
  }),

  confirmPassword: z.string({
    required_error: "Confirm password is required",
  }),
});
