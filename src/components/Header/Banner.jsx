import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";

// import { GoInfo } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const Banner = ({ movies, searchValue, setSearchValue, loading }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies, setMovie]);

  return (
    <header>
      <Link to={`/movies/${movie?.id}`}>
        {!loading && (
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
            className={``}
          >
            {" "}
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="flex flex-col  justify-center my-10 px-3 lg:px-10 space-y-8 py-16 md:space-y-4 h-[30vh] lg:h-[50vh] lg:justify-end lg:pb-12`">
              <h1 className="font-bold text-white text-2xl lg:text-6xl md:text-4xl ">
                {movie?.title || movie?.name}
              </h1>

              <p className="text-shadow-md text-white max-w-xs text-xs md:max-w-lg md:text-lg lg:text-2xl">
                {movie?.overview}
              </p>
              <div className="flex space-x-3">
                <button className="banner__button bg-red-600 text-white">
                  <FaPlay className="h-4 w-4 text-white md:h-7" /> Play
                  <span>WATCH TRAILER</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Link>
    </header>
  );
};

export default Banner;
