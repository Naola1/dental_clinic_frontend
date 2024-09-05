import { IPatientProfile } from "types/profile";
import axios from "./axios";

export const getPatientProfile = async (): Promise<IPatientProfile> => {
  const response = await axios.get("/user/profile/");
  return response.data;
};
