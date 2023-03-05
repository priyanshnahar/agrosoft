import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from 'react-router-dom';
/* Navbar */
import  Navigation  from "./components/Navigation/Navigation";
/* Routes */
import Home from "./pages/Home/Home";
import { Service } from "./pages/Service/Service";
import { Client } from "./pages/About/Clients/Clients";
import { OurProjects } from "./pages/About/OurProjects/OurProjects";
import { CentralGovt } from "./pages/Subsidies/CentralGovt";
import { StateGovt } from "./pages/Subsidies/StateGovt";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";



const App = () => {
  return(
    <>
    <Navigation/>
   <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/service" element={<Service />} />
       <Route exact path="/about/client" element={<Client />} />
       <Route exact path="/about/OurProjects" element={<OurProjects />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/Subsidies" element={<CentralGovt/>} />
       <Route exact path="/about/whatwedo" element={<StateGovt />} />
       <Route exact path="/footer" element={<Footer />} />
    </Routes>
    </>
  )
 
};

export default App;
