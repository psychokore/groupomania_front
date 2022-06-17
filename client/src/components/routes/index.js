import React from "react";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import login from "../../pages/login";
import profil from "../../pages/profil";
import home from "../../pages/home";

const index = () =>{
  return (
    <Router>
       <Routes>
        <Route path="/" exact component={home} />
        <Route path="/profil" exact component={profil} />
        <Route path="/login" exact component={login} />
        <Link to="/" />
       </Routes>
    </Router>
  );
};

export default index