/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tv.png";

const Navbar = () => {
  return (
    <nav className=" flex  flex-row justify-between md:gap-4 md:flex-row md:justify-between items-center py-5 px-5 lg:px-10">
      <Link to="/">
        <div className="flex flex-row justify-between items-center space-y-2 space-x-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-2xl font-bold"> Movies</h1>
        </div>
      </Link>
      <div>Sign in</div>
    </nav>
  );
};

export default Navbar;
