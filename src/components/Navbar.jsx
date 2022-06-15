import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div
      className="drop-shadow-sm fixed w-full h-[80px] flex justify-between items-center px-8 bg-white bg-opacity-80 z-50"
      style={{
        backdropFilter: "blur(5px)",
        boxShadow: "inset 0 0px 0 0 rgba(0,0,0,0.2)",
      }}
    >
      <div className="container flex justify-between items-center w-full">
        <a href="#home" className="font-bold text-lg text-primary block py-6">
          Dharma Putra
        </a>

        {/* Menu */}
        <ul className="hidden md:flex">
          <li className="group cursor-pointer">
            <a
              href="/#profile"
              className="text-base text-dark py-2 lg:mx-8 md:mx-4 group-hover:text-primary"
            >
              Home
            </a>
          </li>
          <li className="group cursor-pointer">
            <a
              href="/#about"
              className="text-base text-dark py-2 lg:mx-8 md:mx-4 group-hover:text-primary"
            >
              About Me
            </a>
          </li>
          <li className="group cursor-pointer">
            <a
              href="/#portfolio"
              className="text-base text-dark py-2 lg:mx-8 md:mx-4 group-hover:text-primary"
            >
              Portfolio
            </a>
          </li>
          <li className="group cursor-pointer">
            <a
              href="/#course"
              className="text-base text-dark py-2 lg:mx-8 md:mx-4 group-hover:text-primary"
            >
              Course
            </a>
          </li>
          <li className="group cursor-pointer">
            <a
              href="/#contact"
              className="text-base text-dark py-2 lg:mx-8 md:mx-4 group-hover:text-primary"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="cursor-pointer md:hidden z-10">
        {!nav ? <FaBars fontSize="1.5em" /> : <FaTimes fontSize="1.5em" />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        <li className="cursor-pointer py-6 text-4xl hover:text-white">Home</li>
        <li className="cursor-pointer py-6 text-4xl hover:text-white">
          About Me
        </li>
        <li className="cursor-pointer py-6 text-4xl hover:text-white">
          Portfolio
        </li>
        <li className="cursor-pointer py-6 text-4xl hover:text-white">
          Clients
        </li>
        <li className="cursor-pointer py-6 text-4xl hover:text-white">Blog</li>
        <li className="cursor-pointer py-6 text-4xl hover:text-white">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
