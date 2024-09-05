import axiosInstance from "./axios";
import { IPatientTreatment } from "../../types/treatment";

export const getPatientTreatment = async (): Promise<IPatientTreatment> => {
  const response = await axiosInstance.get("/patient/history/");
  return response.data;
};
