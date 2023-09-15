/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import SearchInputs from "../Search/SearchInputs";
import { Link } from "react-router-dom";
import logo from "../../assets/tv.png";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <nav className=" flex text-white flex-col md:gap-4 md:flex-row md:justify-between items-center py-5 px-5 lg:px-10">
      <Link to="/">
        <div className="flex flex-row justify-between items-center space-y-2 space-x-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-2xl font-bold"> Movies</h1>
        </div>
      </Link>
      <SearchInputs setSearchValue={setSearchValue} searchValue={searchValue} />
    </nav>
  );
};

export default Header;
