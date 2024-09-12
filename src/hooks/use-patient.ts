import {
  getDoctorDashboardAppointment,
  getPatientDashboardAppointment,
} from "@/api/patient";
import { useQuery } from "@tanstack/react-query";

export const usePADashboard = () => {
  return useQuery({
    queryKey: ["getPatientDashboardAppointment"],
    queryFn: getPatientDashboardAppointment,
  });
};

export const useDADashboard = () => {
  return useQuery({
    queryKey: ["DADashboard"],
    queryFn: () => getDoctorDashboardAppointment({ page_size: "3" }),
  });
};
