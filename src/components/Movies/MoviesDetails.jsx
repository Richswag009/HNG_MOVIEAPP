import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getSingleMovie } from "../api/FetchMovies";
import { FaPlay } from "react-icons/fa";
import Loading from "../../Utils/Loading";

const MoviesDetails = () => {
  const params = useParams();
  const id = params.moviesId;
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(getSingleMovie(`${id}`));
        const data = response.data;
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(true);
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
    <div>
      <Header />
      {error && <p>Error fetching data</p>}
      {loading ? (
        <Loading />
      ) : (
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
            className={`flex flex-col my-10 px-10 space-y-2 py-10 md:space-y-4 lg:h-[50vh] lg:justify-center lg:pb-12`}
          >
            <div className="flex  justify-center items-center">
              <button className="banner__button bg-red-600 text-white">
                <FaPlay className="h-4 w-4 text-white md:h-7" /> Play
                <span>WATCH TRAILER</span>
              </button>
            </div>
          </div>
          <div className=" p-[8%]">
            <h2
              className="text-3xl font-extrabold text-[#be123c]"
              data-testid="movie-title"
            >
              {movie.title}
            </h2>
            <p data-testid="movie-release-date" className="font-bold text-2xl">
              {`Release Date (UTC): ${formatDateToUTC(movie.release_date)} `}
            </p>
            <p data-testid="movie-runtime" className="font-bold text-2xl">
              Runtime: {movie.runtime} minutes
            </p>
            <p
              data-testid="movie-overview"
              className=" text-xl my-10 text-[#333]"
            >
              {movie.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesDetails;
