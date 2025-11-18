import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load halaman
const Home = lazy(() => import("@features/home/Home"));
const About = lazy(() => import("@features/about/About"));
const Kontak = lazy(() => import("@features/kontak/Kontak"));
const OurTeam = lazy(() => import("@features/ourteam/OurTeam"));

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Kontak />} />
      <Route path="/team" element={<OurTeam />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
