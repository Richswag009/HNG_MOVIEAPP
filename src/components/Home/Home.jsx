// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FetchDataFromApi, getGenres, getTvGenres } from "../api/FetchMovies";
import axios from "axios";
import { searchMovies } from "../api/FetchMovies";
import MoviesCard from "../Movies/MoviesCard";
import Banner from "../Header/Banner";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState([]);

  // get all genres
  const getAllGenres = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(getGenres());
      const tvResponse = await axios.get(getTvGenres());
      //  setting both requesetLoadingst to a state using  spread operators
      setGenre([...response.data.genres, ...tvResponse.data.genres]);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError(true);
      setLoading(false);
    }
  };

  // fetch all movies

  // using useeffect on page load
  useEffect(() => {
    const getAllMovie = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          searchValue ? searchMovies(`${searchValue}`) : FetchDataFromApi()
        );
        const data = await response.data.results;
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(true);
      }
      setLoading(false);
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
        {isLoading && <p className="text-3xl text-center ">Loading......</p>}
        {error && <p className="text-3xl ">Error fetching data {error}</p>}
      </div>
    </section>
  );
};

export default Home;
