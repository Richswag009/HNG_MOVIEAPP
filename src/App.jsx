// import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import MoviesDetails from "./components/Movies/MoviesDetails";

function App() {
  return (
    <div className=" mx-4 md:px-10  py-5 ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:moviesId" element={<MoviesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
