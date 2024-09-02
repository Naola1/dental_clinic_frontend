import { login, register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      localStorage.setItem("token", user.access_token);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Registration Successful",
      });
    },
  });
};
