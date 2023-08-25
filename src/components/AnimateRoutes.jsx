import { Home, About, Contact, Portfolio } from "../pages";
import { Routes, Route, useLocation } from "react-router-dom";

const AnimateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AnimateRoutes;
