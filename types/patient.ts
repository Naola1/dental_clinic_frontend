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
