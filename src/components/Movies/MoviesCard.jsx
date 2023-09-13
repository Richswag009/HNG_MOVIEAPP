/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import Card from "../../Utils/Card";
import imbd from "../../assets/imdb.png";
import rot from "../../assets/rot.png";
import { Link } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const MoviesCard = ({ movie, genreList }) => {
  const { genre_ids } = movie;
  // console.log("id", genre_ids);
  const genereNames = genreList
    ? genre_ids.map((id) => {
        return genreList.find((genre) => genre?.id === id);
      })
    : [];

  const formatDateToUTC = (dateString) => {
    const date = new Date(dateString);
    const utcDateString = `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getUTCDate().toString().padStart(2, "0")}`;
    return utcDateString;
  };

  return (
    <Card data-testid="movie-card" id="movies">
      <Link to={`/movies/${movie.id}`}>
        <img
          data-testid="movie-poster"
          src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path} `}
          alt={movie?.title || movie?.original_title || movie?.original_name}
          className="w-[300] h-[400] transition-all transform hover:scale-95 delay-300 duration-300 ease-in-out"
        />

        <div className="p-3 mb-5 w-full">
          <p className="text-sm font-bold ">
            Genres:
            <em className="font-normal">
              {genereNames &&
                genereNames.map((value, i) => (
                  <span key={i}>
                    {i ? ", " : ""}
                    {value?.name}
                  </span>
                ))}
            </em>
          </p>
          <h1
            data-testid="movie-title"
            className=" text-lg leading-tight py-1 "
          >
            {movie?.title || movie?.original_title || movie?.original_name}
          </h1>

          <div className="flex flex-row justify-between items-center gap-12">
            <span className="flex flex-row justify-start items-center  gap-2 py-5 px-0 text-[#111827]">
              <img src={imbd} alt="imbd logo" className=" w-[40%] h-auto" />
              <p> {movie.vote_average}</p>
            </span>
            <span className="flex flex-row justify-start items-center  gap-3 py-5 px-0 text-[#111827]">
              <img src={rot} alt="rot image" className="w-[30%] h-full" />
              <p className=" font-normal"> 97%</p>
            </span>
          </div>
          <p data-testid="movie-release-date" className="release">
            {`Release Date (UTC): ${formatDateToUTC(movie.release_date)} `}
          </p>
        </div>
      </Link>
    </Card>
  );
};

export default MoviesCard;
