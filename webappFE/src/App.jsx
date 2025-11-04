import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import halaman
import Home from "./page/Home";
import About from "./page/About";
import Kontak from "./page/Kontak";
import OurTeam from "./page/OurTeam";

const App = () => {
  return (
    <Router>
      <Header />
      
      <main >
        <Routes>
          {/* LandingPage otomatis redirect ke /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Kontak />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
};

export default App;
