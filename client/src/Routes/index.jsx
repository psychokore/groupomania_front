import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "../Pages/Login";
import Profil from "../Pages/Profil";
import Home from "../Pages/Home";
// import { UidProvider } from "../utils/context";

const index = () =>{
  return (
    <Router>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />
       </Routes>
       
    </Router>
  );
};

export default index