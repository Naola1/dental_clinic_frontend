import { Sidebar } from "@/components/sidebar";
import LoginScreen from "@/pages/auth/login";
import RegisterScreen from "@/pages/auth/register";
import DoctorAppointment from "@/pages/doctor/appointment";
import DoctorDashboard from "@/pages/doctor/dashboard";
import DoctorDoctors from "@/pages/doctor/doctors";
import DoctorPatient from "@/pages/doctor/patient";
import DoctorProfile from "@/pages/doctor/profile";
import LandingPage from "@/pages/landing/Landing";
import PatientAppointment from "@/pages/patient/appointment";
import PatientDashboard from "@/pages/patient/dashboard";
import DoctorsAvailablity from "@/pages/patient/doctors-availablity";
import PatientNotification from "@/pages/patient/notification";
import PatientProfile from "@/pages/patient/profile";
import PatientTreatment from "@/pages/patient/treatment";
import ReceptionistAppointment from "@/pages/receptionist/appointment";
import ReceptionistProfile from "@/pages/receptionist/profile";
import { DoctorSidebar, PatientSidebar } from "@/utils/constants";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
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
    element: <Sidebar items={PatientSidebar} />,
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
        path: "/patient/treatment",
        element: <PatientTreatment />,
      },
      {
        path: "/patient/notification",
        element: <PatientNotification />,
      },
    ],
  },
  {
    path: "/doctor",
    element: <Sidebar items={DoctorSidebar} />,

    children: [
      {
        path: "/doctor/dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "/doctor/profile",
        element: <DoctorProfile />,
      },
      {
        path: "/doctor/appointment",
        element: <DoctorAppointment />,
      },
      {
        path: "/doctor/Patient-Records",
        element: <DoctorPatient />,
      },
      {
        path: "/doctor/doctors",
        element: <DoctorDoctors />,
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
