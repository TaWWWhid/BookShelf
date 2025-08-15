// import React from 'react';

import Banner from "../Componants/Banner/Banner";
import Books from "../Componants/Books/Books";
// import NavBar from "../Componants/NavBar/NavBar";

const Home = () => {
    return (
        <div>
             {/*nav bar*/}
             {/* <NavBar></NavBar> */}
             
             <div  className="m-auto  min-h-screen px-11">

             <Banner></Banner>
             </div>
            
             <div>
             <Books></Books>
             </div>
        </div>
    );
};

export default Home;