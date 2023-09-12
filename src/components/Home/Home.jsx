// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FetchDataFromApi, getGenres, getTvGenres } from "../api/FetchMovies";
import axios from "axios";
import { searchMovies } from "../api/FetchMovies";
import MoviesCard from "../Movies/MoviesCard";
import Banner from "../Header/Banner";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState([]);

  // get all genres
  const getAllGenres = async () => {
    setIsLoading(true);
    const response = await axios.get(getGenres());
    const tvResponse = await axios.get(getTvGenres());
    //  setting both request to a state using  spread operators
    setGenre([...response.data.genres, ...tvResponse.data.genres]);
    setIsLoading(false);
  };

  // fetch all movies

  // using useeffect on page load
  useEffect(() => {
    const getAllMovie = async () => {
      setIsLoading(true);
      const response = await axios.get(
        searchValue ? searchMovies(`${searchValue}`) : FetchDataFromApi()
      );
      // if(!response.)
      const data = await response.data.results;
      setMovies(data);
      console.log(data);
      setIsLoading(false);
    };

    getAllMovie();
    getAllGenres();
  }, [searchValue]);

  //
  const allMovies = movies.slice(0, 10).map((movie, i) => {
    return (
      <MoviesCard
        movie={movie}
        key={i}
        genreList={genre}
        isLoading={isLoading}
      />
    );
  });

  //
  return (
    <section className="">
      <Banner
        movies={movies}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-1 items-center ">
        {!isLoading && allMovies}
        {isLoading && <p className="text-3xl ">Loading......</p>}
      </div>
    </section>
  );
};

export default Home;
