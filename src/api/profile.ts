import { IPatientProfile } from "types/profile";
import axiosInstance from "./axios";
import { IProfileUpdate } from "types/auth";
import { z } from "zod";
import { UpdateProfileSchema } from "@/schema/auth";

export const getPatientProfile = async (): Promise<IPatientProfile> => {
  const response = await axiosInstance.get("/user/profile/");
  return response.data;
};

export const profileUpdate = async (
  data: z.infer<typeof UpdateProfileSchema>
): Promise<IProfileUpdate> => {
  const response = await axiosInstance.put("/user/profile/", data);
  return response.data;
};
