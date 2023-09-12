const API_KEY = "4772e8c4369ba73ef9d5fd8032b770d6";

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
// https://api.themoviedb.org/3/genre/movie/list?api_key=4772e8c4369ba73ef9d5fd8032b770d6&language=en-US
// https://api.themoviedb.org/3/genre/movie/list?api_key=4772e8c4369ba73ef9d5fd8032b770d6&language=en-US
// https://api.themoviedb.org/3/genre/tv/list?api_key=4772e8c4369ba73ef9d5fd8032b770d6
