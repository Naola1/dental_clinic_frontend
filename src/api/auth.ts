import axios from "axios";
import { ILogin, IRegister, LoginResponse } from "../../types/auth";

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
