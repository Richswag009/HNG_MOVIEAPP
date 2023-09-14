// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FetchDataFromApi, getGenres, getTvGenres } from "../api/FetchMovies";
import axios from "axios";
import { searchMovies } from "../api/FetchMovies";
import MoviesCard from "../Movies/MoviesCard";
import Banner from "../Header/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState([]);

  // get all genres
  const getAllGenres = async () => {
    setLoading(true);
    try {
      const response = await axios.get(getGenres());
      const tvResponse = await axios.get(getTvGenres());
      //  setting both requesetLoadingst to a state using  spread operators
      setGenre([...response.data.genres, ...tvResponse.data.genres]);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching movie details:", error);
      setError(error.message);
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
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
        setError(error.message);
      }
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
      {error && (
        <p className="text-3xl text-center">Error fetching data {error}</p>
      )}
      <Banner
        movies={movies}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        loading={isLoading}
      />
      {!isLoading && !error ? (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#be123c]">
              Featured movies{" "}
            </h2>

            <p className=" hover:underline text-lg text-[#be123c]">See more</p>
          </div>
          <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-1 items-center ">
            {!isLoading && allMovies}
          </div>
        </div>
      ) : (
        <p className="text-3xl mx-auto flex justify-center item-center ">
          Loading......
        </p>
      )}
      <Footer />
    </section>
  );
};

export default Home;
