import { IPatientProfile } from "types/profile";
import axiosInstance from "./axios";

export const getPatientProfile = async (): Promise<IPatientProfile> => {
  const response = await axiosInstance.get("/user/profile/");
  return response.data;
};
