import { AboutUs } from "@/pages/AboutUs";
import { Dashboard } from "@/pages/Dashboard";
import Donate from "@/pages/Donate";
import { Home } from "@/pages/Home";
import { IfasheTugufashe } from "@/pages/IfasheTugufashe";
import { LoginPage } from "@/pages/Login";
import OurImpact from "@/pages/OurImpact";
import { Programs } from "@/pages/Programs";
import { ResidentialCare } from "@/pages/ResidentialCare";
import { SignupPage } from "@/pages/Signup";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/residentialCare" element={<ResidentialCare />} />
      <Route path="/OurImpact" element={<OurImpact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="programs/ifasheTugufashe" element={<IfasheTugufashe />} />

      {/* ADMIN PAGES ROUTES */}

      <Route path="/adminLogin" element={<LoginPage />} />
      <Route path="/adminSignup" element={<SignupPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
