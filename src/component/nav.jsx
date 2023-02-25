import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cerrar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className=" hidden lg:block w-96 h-96 ml-10 mt-36  fixed top-0">
        <Link to="/">
          <div className="font-juana font-semibold text-3xl text-turqueza text-justify">
            <h1 className=""> Juanita</h1>
            <h1> Villegas</h1>
          </div>
        </Link>
        <Link to="/">
          <p className="font-juana text-black mt-8 hover:text-turqueza active:text-turqueza">
            Home
          </p>
        </Link>
        <Link to="gallery">
          <p className="font-juana text-black mt-8  hover:text-turqueza active:text-turqueza">
            Galleries
          </p>
        </Link>
        <Link to="about">
          <p className="font-juana text-black mt-8  hover:text-turqueza active:text-turqueza">
            About
          </p>
        </Link>
        <Link to="contact">
          <p className="font-juana text-black mt-8  hover:text-turqueza active:text-turqueza">
            Contact
          </p>
        </Link>
      </nav>

      <nav className="block lg:hidden h-20 bg-turqueza">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/">
            <div className="mt-3 ml-4 w-36 font-juana font-bold text-lg text-black  ">
              <h1> Juanita villegas </h1>
            </div>
          </Link>
          <div>
            <button
              className="mr-4 mt-4 float-right flex items-center px-3 py-2 border rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="fill-current h-8 w-8"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="block lg:hidden ">
          <div className="navpadre  ">
            <div className="mx-auto z-20">
              <Link
                to="/"
                className="block px-6 w-32 font-medium mt-4 text-2xl "
                onClick={cerrar}
              >
                HOME
              </Link>
              <Link
                to="gallery"
                className="block px-3 w-32 font-medium mt-4 text-2xl"
                onClick={cerrar}
              >
                Galleries
              </Link>
              <Link
                to="about"
                className="block px-6 w-32 font-medium mt-4 text-2xl"
                onClick={cerrar}
              >
                About
              </Link>
              <Link
                to="contact"
                className="block px-4 w-32 font-medium mt-4 text-2xl"
                onClick={cerrar}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
