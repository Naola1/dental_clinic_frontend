import axios from "./axios";
import { ILogin, IRegister, LoginResponse } from "../../types/auth";

export const login = async (user: ILogin): Promise<LoginResponse> => {
  const response = await axios.post("/user/login/", user);
  return response.data;
};

export const register = async (user: IRegister) => {
  const response = await axios.post("/user/register/", user);
  return response.data;
};
