/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ id, imageSrc, title, description, link, buttonLabel }) => {
  return (
    
    
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 relative mt-16">
      <Link to={`/events/${id}`}>
      <div className="bg-white  rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <a href={link} className="block overflow-hidden rounded-t-lg hover:hidden">
          <img className="object-cover w-full h-40" src={imageSrc} alt="" />
        </a>
        <div className="absolute inset-0 bg-black rounded-none text-purple-500 p-4 opacity-0 hover:opacity-100 transition-opacity">
          <a href={link} className="block">
            <h5 className="mb-2 text-6xl font-bold tracking-tight">{title}</h5>
          </a>
          <div className="mb-2 text-sm h-16 overflow-hidden hover:h-full">
            {description}
          </div>
        </div>
        <div className="p-4">
          <a href={link} className="block">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
          </a>
          <div className="mb-2 text-sm text-gray-700 h-16 overflow-hidden hover:h-full">
            {description}
          </div>
          <a
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black hover:bg-purple-500 hover:text-black rounded-lg"
          >
            Button Tickets
            <svg
              className="rtl:rotate-180 w-3 h-3 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      </Link>
    </div>
    
  );
};

export default Cards;
