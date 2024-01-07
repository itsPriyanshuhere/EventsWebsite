// src/NotFound.js
import React from 'react';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center animate__animated animate__fadeIn">
        <h1 className="text-8xl font-extrabold text-purple-500 mb-4 mt-16 font-mono">
          404 - Not Found
        </h1>
        <p className="text-white text-lg mb-8 font-mono">
          Oops! The page you are looking for might be in another dimension.
        </p>
        <Link to="/">
        <button className="bg-purple-500 rounded-lg w-full text-white">Get Redirected</button>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
