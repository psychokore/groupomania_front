import React from "react";
import Log from "../components/Log";


const Login = () =>{
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log signin={true} signup={false} />
        <div className="img-container">
          <img src="./img/icon-left-font-monochrome-white.png" alt="logo groupomania"/>
        </div>
      </div>
    </div>
  );
};

export default Login