import axios from "./axios";
import { IPatientTreatment } from "../../types/treatment";

export const getPatientTreatment = async (): Promise<IPatientTreatment> => {
  const response = await axios.get("/patient/history/");
  return response.data;
};
