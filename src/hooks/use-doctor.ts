import {
  booking,
  getAllDoctors,
  getSingleDoctor,
  getSingleDoctorAvailablity,
} from "@/api/doctor";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BookingProps } from "types/doctor";

export const useAllDoctors = () => {
  return useQuery({
    queryKey: ["allDotors"],
    queryFn: getAllDoctors,
  });
};

export const useSingleDoctors = (id: number) => {
  return useQuery({
    queryKey: ["singleDoctor", id],
    queryFn: () => getSingleDoctor(id),
  });
};

export const useBooking = () => {
  return useMutation({
    mutationFn: ({ id, data }: BookingProps) => booking({ id, data }),
  });
};

export const usePDA = (id: number) => {
  return useQuery({
    queryKey: ["pda"],
    queryFn: () => getSingleDoctorAvailablity(id),
  });
};
