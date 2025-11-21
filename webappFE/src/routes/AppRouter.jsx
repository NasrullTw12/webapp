// AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";

// Import langsung tanpa lazy
import Home from "@features/home/Home";
import About from "@features/about/About";
import Kontak from "@features/kontak/Kontak";
import OurTeam from "@features/ourteam/OurTeam";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Kontak />} />
    <Route path="/team" element={<OurTeam />} />
  </Routes>
);

export default AppRouter;
