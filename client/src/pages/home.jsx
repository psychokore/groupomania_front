import React from "react";
import NavBar from "../components/navBar/NavBar";
import Feed from "../components/feed";


const Home = () =>{
  return (
    <div>
        <NavBar />
        <div className="homepage-content">
          <Feed />
          
        </div>
    </div>
  );
};

export default Home