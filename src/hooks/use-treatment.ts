import { getPatientTreatment } from "@/api/treatment";
import { useQuery } from "@tanstack/react-query";

export const useTreatment = () => {
  return useQuery({
    queryKey: ["patient-treatment"],
    queryFn: getPatientTreatment,
  });
};
