import React from "react";
import imageprofolio from "../assets/portfolioimg.svg";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
function Home() {
  return (
    <div name="home" className="h-screen w-full bg-white  dark:bg-gray-900 home">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={imageprofolio}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            draggable="false"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
            Soy un Desarollador Web Full Stack
          </h2>
{/*           <p className="text-gray-800 py-4 max-w-md text-2xl sm:text-1xl">
            I have 2 years of experience building websites and desgining
            software. I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p> */}
<br />
          <div className="portfolio-btn py-8">
              <Link
            to="proyectos"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer"
          >
            Proyectos
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link> 
          </div>
        </div>
        <div className="big-screen">
          <img
            src={imageprofolio}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
