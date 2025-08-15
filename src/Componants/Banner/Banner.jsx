// import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/images/pngwing 1.png'
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-2xl ">
    <div className="hero-content flex-col lg:flex-row-reverse py-9">
      <img src={image}  className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold py-5">Books to freshen <br />up your bookshelf</h1>
        
        <button className="btn btn-primary"><NavLink to='/list' className={({isActive}) => isActive ? 'text-green-600' : 'text-gray-500'}>View The List</NavLink></button>
      </div>
    </div>
  </div>
  );
};

export default Banner;