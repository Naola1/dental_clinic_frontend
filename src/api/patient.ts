import { IPAppointmentDashboard } from "../../types/patient";
import axios from "./axios";

export const getPatientDashboardAppointment =
  async (): Promise<IPAppointmentDashboard> => {
    const response = await axios.get("/appointments/?page=1");
    return response.data;
  };
