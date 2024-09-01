import { login, register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { ILogin, IRegister } from "types/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (user: ILogin) => {
      console.log(user);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: (user: IRegister) => {
      console.log(user);
    },
  });
};
