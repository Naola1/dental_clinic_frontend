import axios from "axios";
import {
  ForgotPasswordRes,
  IForgotPassword,
  ILogin,
  IRegister,
  LoginResponse,
} from "../../types/auth";

export const login = async (user: ILogin): Promise<LoginResponse> => {
  const response = await axios.post(
    "https://dental-clinic-lqrz.onrender.com/api/user/login/",
    user
  );
  return response.data;
};

export const register = async (user: IRegister) => {
  const response = await axios.post(
    "https://dental-clinic-lqrz.onrender.com/api/user/register/",
    user
  );
  return response.data;
};

export const forgotPassword = async (
  data: IForgotPassword
): Promise<ForgotPasswordRes> => {
  const response = await axios.post(
    "https://dental-clinic-lqrz.onrender.com/api/password_reset/",
    data
  );
  return response.data;
};
