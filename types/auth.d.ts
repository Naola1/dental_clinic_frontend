import { Description } from "@radix-ui/react-toast";

// Interface for user login credentials
export interface ILogin {
  email: string;
  password: string;
}

// Interface for forgot password request
export interface IForgotPassword {
  email: string;
}

// Interface for resetting the password
export interface IResetPassword {
  token: string;
  password: string;
}

// Interface for user registration details
export interface IRegister {
  email: string;
  username: string;
  password: string;
}

// Interface for the response received after login
export interface LoginResponse {
  message: string;
  user_id: number;
  email: string;
  role: string;
  access_token: string;
}

// Interface for the response after a forgot password request
export interface ForgotPasswordRes {
  status: string;
}

// Interface representing an item in the sidebar navigation
export interface SidebarItem {
  title: string;
  href: string;
}

// Interface for updating user profile information
export interface IProfileUpdate {
  user: User;
  medical_history: string;
  allergies: string;
}

// Interface representing a user with detailed information
interface User {
  username: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  role: string;
}

// Interface for treatment response including pagination
interface ITreatmentRes {
  count: number;
  next: null;
  previous: null;
  results: IResult[];
}

// Interface representing an individual treatment result
interface IResult {
  id: number;
  name: string;
  description: string;
}
