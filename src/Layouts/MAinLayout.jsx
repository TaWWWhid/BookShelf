// import React from 'react';

import { Outlet } from "react-router-dom";
import NavBar from "../Componants/NavBar/NavBar";

const MAinLayout = () => {
    return (
        <div>
            <div>
          <NavBar></NavBar>         
            </div>
            <div>

       <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MAinLayout;