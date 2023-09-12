import { useEffect, useState } from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import Header from "./Header";
// import { GoInfo } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const Banner = ({ movies, searchValue, setSearchValue }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies, setMovie]);

  return (
    <header>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
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
        className={`flex flex-col my-10 px-10 space-y-2 py-16 md:space-y-4 lg:h-[50vh] lg:justify-end lg:pb-12`}
      >
        <h1 className="font-bold text-white text-2xl lg:text-6xl md:text-4xl ">
          {movie?.title || movie?.name}
        </h1>
        <p className="text-shadow-md text-white max-w-xs text-xs md:max-w-lg md:text-lg lg:text-2xl">
          {movie?.overview} ...
        </p>
        <div className="flex space-x-3">
          <button className="banner__button bg-red-600 text-white">
            <FaPlay className="h-4 w-4 text-white md:h-7" /> Play
            <span>WATCH TRAILER</span>
          </button>
          {/* <button className="banner__button bg-[gray]/70">
            {" "}
            More info
            <FaInfoCircle className="h-5 w-5 md:h-8 md:w-8" />{" "}
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Banner;
