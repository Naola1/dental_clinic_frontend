import { IPAppointmentDashboard } from "../../types/patient";
import axiosInstance from "./axios";

export const getPatientDashboardAppointment =
  async (): Promise<IPAppointmentDashboard> => {
    const response = await axiosInstance.get("/appointments/?page=1");
    return response.data;
  };
