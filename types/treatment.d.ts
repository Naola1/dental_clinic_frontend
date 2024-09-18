// Interface for the response containing patient treatment records
export interface IPatientTreatment {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

// Interface representing an individual treatment result for a patient
interface Result {
  id: number;
  patient: Patient;
  doctor: Patient;
  treatment: Treatment;
  treatment_date: string;
  description: string;
  follow_up_date: string;
}

// Interface representing treatment details
interface Treatment {
  id: number;
  name: string;
  description: string;
}

// Interface representing a patient with personal details
interface Patient {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

// Interface for the response containing doctor treatment records
export interface IDoctorTreatment {
  count: number;
  next: null;
  previous: null;
  results: DResult[];
}

// Interface representing an individual treatment result for a doctor
interface DResult {
  id: number;
  patient: DPatient;
  doctor: DPatient;
  treatment: DTreatment;
  treatment_date: string;
  description: string;
  follow_up_date: string;
}

// Interface representing treatment details for doctors
interface DTreatment {
  id: number;
  name: string;
  description: string;
}

// Interface representing a patient with personal details for doctors
interface DPatient {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}
