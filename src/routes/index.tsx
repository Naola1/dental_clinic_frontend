import LoginScreen from "@/pages/auth/login";
import RegisterScreen from "@/pages/auth/register";
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
]);
