export interface IPAppointmentDashboard {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

interface Result {
  id: number;
  patient: number;
  doctor: Doctor;
  appointment_date: string;
  status: string;
}

interface Doctor {
  id: number;
  user: User;
  specialization: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
}

export interface IDoctorAppointmentDashboard {
  count: number;
  next: null;
  previous: null;
  results: DResult[];
}

interface DResult {
  id: number;
  patient: DPatient;
  doctor: DDoctor;
  appointment_date: string;
  status: string;
}

interface DDoctor {
  id: number;
  user: DUser;
  specialization: string;
}

interface DPatient {
  id: number;
  user: DUser;
}

interface DUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
}
