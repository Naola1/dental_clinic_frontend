import { SidebarItem } from "types/auth";

export const PatientSidebar: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/patient/dashboard",
  },
  {
    title: "Doctors",
    href: "/patient/doctors",
  },
  {
    title: "Treatment",
    href: "/patient/treatment",
  },
  {
    title: "Notification",
    href: "/patient/notification",
  },
  {
    title: "Profile",
    href: "/patient/profile",
  },
];

export const DoctorSidebar: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/doctor/dashboard",
  },
  {
    title: "Doctors",
    href: "/doctor/doctors",
  },
  {
    title: "Patient",
    href: "/doctor/patient",
  },
  {
    title: "Appointment",
    href: "/doctor/appointment",
  },
  {
    title: "Profile",
    href: "/doctor/profile",
  },
];
