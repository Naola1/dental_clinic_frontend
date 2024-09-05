import {
  BookingProps,
  IBookingResponse,
  IDoctorResponse,
  IDoctorsAvailablitySingle,
  ISingleDoctor,
} from "../../types/doctor";
import axios from "./axios";

export const getAllDoctors = async (): Promise<IDoctorResponse> => {
  const response = await axios.get("/doctors");
  return response.data;
};

export const getSingleDoctor = async (id: number): Promise<ISingleDoctor> => {
  const response = await axios.get(`/doctors/${id}`);
  return response.data;
};

export const booking = async ({
  id,
  data,
}: BookingProps): Promise<IBookingResponse> => {
  const response = await axios.post(`/bookings/${id}/book_appointment`, {
    data,
  });
  return response.data;
};

export const getSingleDoctorAvailablity = async (
  id: number
): Promise<IDoctorsAvailablitySingle> => {
  const response = await axios.get(`/availabilities/${id}`);
  return response.data;
};
