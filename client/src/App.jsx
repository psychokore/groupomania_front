import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Routes from "./routes";


library.add(fas, far)

const App = () =>{
  return (
    <div>
        <Routes/>
    </div>
  );
};

export default App;