import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cerrar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className=" hidden sm:block w-96 h-96 ml-10 mt-36 ">
        <Link to="/">
          <div className="font-juana font-semibold text-3xl text-turqueza text-justify">
            <h1> Juanita</h1>
            <h1> Villegas</h1>
          </div>
        </Link>
        <Link to="/">
          <p className="font-juana text-black mt-8 hover:text-turqueza active:text-turqueza">
            Home
          </p>
        </Link>
        <Link to="/">
          <h1 className="font-juana text-black mt-8  hover:text-turqueza active:text-turqueza">
            Galleries
          </h1>
        </Link>
        <Link to="/">
          <h1 className="font-juana text-black mt-8  hover:text-turqueza active:text-turqueza">
            About
          </h1>
        </Link>
        <Link to="contact">
          <h1 className="font-juana text-black mt-8  hover:text-turqueza active:text-turqueza">
            Contact
          </h1>
        </Link>
      </nav>

      <nav className="block sm:hidden z-[100] h-20 bg-turqueza">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/">
            <div className="mt-4 ml-4 w-36 font-juana font-semibold text-md text-black  ">
              <h1> Juana villegas </h1>
              <h2>otronombre</h2>
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
        <div className="block sm:hidden opacity-20">
          <div className="bg-turqueza absolute w-screen h-full flex items-center ">
            <div className="mx-auto ">
              <Link
                to="/"
                className="block opacity-90 px-6 w-32 font-medium mt-4 text-2xl "
                onClick={cerrar}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="block opacity-90 px-5 w-32 font-medium mt-4 text-2xl"
                onClick={cerrar}
              >
                Galleries
              </Link>
              <Link
                to="/skill"
                className="block opacity-90 px-6 w-32 font-medium mt-4 text-2xl"
                onClick={cerrar}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block opacity-90 px-2 w-32 font-medium mt-4 text-2xl"
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
