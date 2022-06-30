import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "../../pages/Login";
import Profil from "../../pages/Profil";
import Home from "../../pages/Home";

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