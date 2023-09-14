/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import SearchInputs from "../Search/SearchInputs";
import { Link } from "react-router-dom";
import logo from "../../assets/tv.png";

const Navbar = () => {
  return (
    <nav className=" flex flex-col md:gap-4 md:flex-row md:justify-between items-center ">
      <Link to="/">
        <div className="flex flex-row justify-between items-center space-x-2">
          <h1 className="text-2xl font-bold"> Movies</h1>
          <img src={logo} alt="logo" className="w-12" />
        </div>
      </Link>
      <div>Sign in</div>
    </nav>
  );
};

export default Navbar;