// Interface for the appointment dashboard response for patients
export interface IPAppointmentDashboard {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

// Interface representing an individual appointment result
interface Result {
  id: number;
  patient: number;
  doctor: Doctor;
  appointment_date: string;
  status: string;
}

// Interface representing a doctor with details
interface Doctor {
  id: number;
  user: User;
  specialization: string;
}

// Interface representing a user with personal details
interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
}

// Interface for the appointment dashboard response for doctors
export interface IDoctorAppointmentDashboard {
  count: number;
  next: null;
  previous: null;
  results: DResult[];
}

// Interface representing an individual appointment result for doctors
interface DResult {
  id: number;
  patient: DPatient;
  doctor: DDoctor;
  appointment_date: string;
  status: string;
}

// Interface representing a doctor with details for doctors' appointments
interface DDoctor {
  id: number;
  user: DUser;
  specialization: string;
}

// Interface representing a patient with details for doctors' appointments
interface DPatient {
  id: number;
  user: DUser;
}

// Interface representing a user with personal details for doctors' appointments
interface DUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
}

// Interface for search results for appointments
export interface ISearch {
  id: number;
  patient: SPatient;
  doctor: SDoctor;
  appointment_date: string;
  status: string;
}

// Interface representing a doctor with details for search results
interface SDoctor {
  id: number;
  user: SUser;
  specialization: string;
}

// Interface representing a patient with details for search results
interface SPatient {
  id: number;
  user: User;
}

// Interface representing a user with personal details for search results
interface SUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
}

// Interface for search results related to treatments
export interface ISearchRecord {
  id: number;
  patient: RPatient;
  doctor: RPatient;
  treatment: RTreatment;
  treatment_date: string;
  description?: string;
  follow_up_date: null;
}

// Interface representing a treatment with details
interface RTreatment {
  id: number;
  name: string;
  description: string;
}

// Interface representing a patient with details for treatment records
interface RPatient {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}
