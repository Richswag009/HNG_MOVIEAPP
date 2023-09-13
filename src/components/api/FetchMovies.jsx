const API_KEY = import.meta.env.VITE_API_KEY;

export const FetchDataFromApi = () => {
  return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;
};
export const getSingleMovie = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
};
export const searchMovies = (data) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${data}`;
};

export const getGenres = () => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
};
export const getTvGenres = () => {
  return `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;
};
