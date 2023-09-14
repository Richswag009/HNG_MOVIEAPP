import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getSingleMovie } from "../api/FetchMovies";
import { FaPlay } from "react-icons/fa";

const MoviesDetails = () => {
  const params = useParams();
  const id = params.moviesId;
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(getSingleMovie(`${id}`));
        const data = response.data;
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(error.messgae);
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);

  const formatDateToUTC = (dateString) => {
    const date = new Date(dateString);
    const utcDateString = `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getUTCDate().toString().padStart(2, "0")}`;
    return utcDateString;
  };

  return (
    <section>
      <Header />
      {!loading && !error ? (
        <div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(
          https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
          )`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "80vh",
              backgroundColor: "#000",
            }}
            className={`flex flex-col my-10 justify-center px-10 space-y-2 py-10 md:space-y-4 lg:h-[50vh] lg:justify-center lg:pb-12`}
          >
            <div className="flex flex-row justify-center items-center">
              <button className="banner__button bg-red-600 text-white">
                <FaPlay className="h-4 w-4 text-white md:h-7" /> Play
                <span>WATCH TRAILER</span>
              </button>
            </div>
          </div>

          <div className="p-[4%] lg:p-[8%]">
            <h2
              className="text-3xl font-extrabold text-[#be123c]"
              data-testid="movie-title"
            >
              {movie.title}
            </h2>
            <p className="font-bold text-2xl">
              Release Date (UTC):
              <span data-testid="movie-release-date">
                {`${formatDateToUTC(movie?.release_date)}`}
              </span>
            </p>

            <p className="font-bold text-2xl">
              <span data-testid="movie-runtime">
                Runtime: {movie.runtime} minutes
              </span>
            </p>
            <p
              data-testid="movie-overview"
              className=" text-xl my-10 text-[#333]"
            >
              {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </section>
  );
};

export default MoviesDetails;
