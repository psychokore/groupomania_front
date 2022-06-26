import React from "react";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
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
        <Link to="/" />
       </Routes>
    </Router>
  );
};

export default index