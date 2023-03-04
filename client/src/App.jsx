import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from 'react-router-dom';
/* Routes */
import Home from "./pages/Home/Home";
import { Client } from "./pages/About/Clients/Clients";
import { WhatWeDO } from "./pages/About/WhatWeDo/WhatWeDo";

import { CentralGovt } from "./pages/Subsidies/CentralGovt";
import { StateGovt } from "./pages/Subsidies/StateGovt";
import Contact from "./pages/Contact/Contact";

/* Navbar */
import  Navigation  from "./components/Navigation/Navigation";


const App = () => {
  return(
    <>
    <Navigation/>
   <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/" element={<Service />} />
    
       <Route exact path="/about/client" element={<Client />} />
       <Route exact path="/about/whatwedo" element={<WhatWeDO />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/Subsidies/" element={<CentralGovt/>} />
       <Route exact path="/about/whatwedo" element={<StateGovt />} />
    </Routes>
    </>
  )
 
};

export default App;
