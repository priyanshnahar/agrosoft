import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
/* Navbar */
import Navigation from "./components/Navigation/Navigation";
/* Routes */
import Home from "./pages/Home/Home";
import { Client } from "./pages/About/Clients/Clients";
import { CentralGovt } from "./pages/Subsidies/CentralGovt";
import { StateGovt } from "./pages/Subsidies/StateGovt";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Service from "./pages/Service/Service";
import { OurProjects } from "./pages/About/OurProjects/OurProjects";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Service />} />

        {/* ABOUTUS */}
        <Route exact path="/about/client" element={<Client />} />
        <Route exact path="/about/OurProjects" element={<OurProjects />} />
        {/* SUBSIDIES */}
        <Route exact path="/subsidies/centarlgovt" element={<CentralGovt />} />
        <Route exact path="/subsidies/stategovt" element={<StateGovt />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
