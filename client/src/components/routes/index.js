import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "../../pages/login";
import Profil from "../../pages/profil";
import Home from "../../pages/home";

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