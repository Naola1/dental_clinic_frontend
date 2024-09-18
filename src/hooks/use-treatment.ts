import { getDoctorTreatment, getPatientTreatment } from "@/api/treatment";
import { useQuery } from "@tanstack/react-query";

export const useTreatment = () => {
  return useQuery({
    queryKey: ["patient-treatment"],
    queryFn: getPatientTreatment,
  });
};

/**
 * Fetches the treatment records for a doctor
 *
 * @returns The doctor's treatment records
 */
export const useDoctorTreatment = () => {
  return useQuery({
    queryKey: ["doctor-treatment"],
    queryFn: getDoctorTreatment,
  });
};
