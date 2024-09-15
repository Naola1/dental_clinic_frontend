import { forgotPassword, login, register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import useAuthStore from "./zustand/use-auth-store";
import {
  docAddRecrord,
  profileUpdate,
  profileUpdateDoctor,
} from "@/api/profile";

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
export const useUpdateProfileDoctor = () => {
  return useMutation({
    mutationFn: profileUpdateDoctor,
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Profile update Successful",
      });
    },
  });
};

export const useDocAddRecord = () => {
  return useMutation({
    mutationFn: docAddRecrord,
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Record added Successful",
      });
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
  });
};
