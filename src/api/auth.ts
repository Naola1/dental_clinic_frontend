import axios from "./axios";
import { ILogin, IRegister } from "../../types/auth";

export const login = async (user: ILogin) => {
  const response = await axios.post("/user/login/", user);
  return response.data;
};

export const register = async (user: IRegister) => {
  const response = await axios.post("/user/register/", user);
  return response.data;
};
