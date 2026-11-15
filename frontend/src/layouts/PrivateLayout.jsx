import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export const PrivateLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);