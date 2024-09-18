import { BookingSchema } from "@/schema/doctors";

// Interface for the response received when querying for doctors
export interface IDoctorResponse {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

// Interface representing an individual doctor result
interface Result {
  id: number;
  user: User;
  specialization: string;
  bio: string;
  profile_picture: null;
  experience: number;
  qualification: string;
}

// Interface representing a user with personal details
export interface User {
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  date_of_birth: null;
  phone_number: string;
  address: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  role: string;
}

// Interface for a single doctor's detailed information
export interface ISingleDoctor {
  user: IUser;
  specialization: string;
  bio: string;
  profile_picture: null;
  experience: number;
  qualification: string;
}

// Interface representing user details
interface IUser {
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  date_of_birth: null;
  phone_number: string;
  address: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  role: string;
}

// Interface for booking an appointment
export interface IBooking {
  appointment_date: string;
}

// Interface for the response received after booking an appointment
export interface IBookingResponse {
  id: string;
  patient: string;
  doctor: string;
  appointment_date: string;
  status: string;
}

// Interface for the properties of booking component
export interface BookingProps {
  id: number;
  data: {
    appointment_date: string;
  };
}

// Interface for the status of an appointment
export interface IAppointmentStatus {
  id: number;
  data: {
    status: string;
  };
}

// Interface for the availability response of doctors
interface IDoctorsAvailablity {
  count: number;
  next: null;
  previous: null;
  results: DoctorsAvailablity[];
}

// Interface representing a single doctor's availability
interface IDoctorsAvailablitySingle {
  id: number;
  doctor: number;
  day_of_week: string;
}
