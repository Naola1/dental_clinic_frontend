import { login, register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import useAuthStore from "./zustand/use-auth-store";
import { profileUpdate } from "@/api/profile";

export const useLogin = () => {
  const authStore = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      authStore.login(user.access_token);
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

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: profileUpdate,
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Profile update Successful",
      });
    },
  });
};
