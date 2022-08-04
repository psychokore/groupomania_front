import React from "react";
import NavBar from "../components/navBar/NavBar";
import Feed from "../components/feed";
import PostModule from "../components/postmodule";

const Home = () =>{
  return (
    <div>
        <NavBar />
        <div className="homepage-content">
          <Feed />
          <PostModule />
        </div>
    </div>
  );
};

export default Home