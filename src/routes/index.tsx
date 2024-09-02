import LoginScreen from "@/pages/auth/login";
import RegisterScreen from "@/pages/auth/register";
import DoctorAppointment from "@/pages/doctor/appointment";
import DoctorDashboard from "@/pages/doctor/dashboard";
import DoctorPatientHistory from "@/pages/doctor/patient-history";
import DoctorProfile from "@/pages/doctor/profile";
import PatientAppointment from "@/pages/patient/appointment";
import PatientDashboard from "@/pages/patient/dashboard";
import DoctorsAvailablity from "@/pages/patient/doctors-availablity";
import PatientPatientHistory from "@/pages/patient/patient-history";
import PatientProfile from "@/pages/patient/profile";
import ReceptionistAppointment from "@/pages/receptionist/appointment";
import ReceptionistProfile from "@/pages/receptionist/profile";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/patient",
    children: [
      {
        path: "/patient/dashboard",
        element: <PatientDashboard />,
      },
      {
        path: "/patient/appointment",
        element: <PatientAppointment />,
      },
      {
        path: "/patient/profile",
        element: <PatientProfile />,
      },
      {
        path: "/patient/doctors",
        element: <DoctorsAvailablity />,
      },
      {
        path: "/patient/history",
        element: <PatientPatientHistory />,
      },
    ],
  },
  {
    path: "/doctor",
    children: [
      {
        path: "/doctor/dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "/doctor/patient-history",
        element: <DoctorPatientHistory />,
      },
      {
        path: "/doctor/profile",
        element: <DoctorProfile />,
      },
      {
        path: "/doctor/appointment",
        element: <DoctorAppointment />,
      },
    ],
  },
  {
    path: "/receptionist",
    children: [
      {
        path: "/receptionist/dashboard",
        element: <PatientDashboard />,
      },
      {
        path: "/receptionist/appointment",
        element: <ReceptionistAppointment />,
      },
      {
        path: "/receptionist/profile",
        element: <ReceptionistProfile />,
      },
    ],
  },
]);
