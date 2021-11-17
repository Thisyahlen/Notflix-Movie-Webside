const API_KEY = "a3827e96de599b6142d695f536ca566d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchNowPlaying: `/movie/now_playing/?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false`,
};

export default requests;

/*
https://api.themoviedb.org/3/discover/tv?api_key=a3827e96de599b6142d695f536ca566d&with_networks=213
"https://image.tmdb.org/t/p/original/vFMvVG4KyMGwxOi9EB9JeIkLdvj.jpg"

/movie/top_rated/?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false





*/
