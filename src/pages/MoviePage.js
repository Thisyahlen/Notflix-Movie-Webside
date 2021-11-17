import React, { useEffect, useState } from "react";
import axios from "../axios";
// import { genres } from "../Genre";
import { useLocation } from "react-router-dom";
import "../App.css";
import "./HomeScreen.css";
import "../pages/MoviePage.css";
import Row from "../components/Row";
import requests from "../Request";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MoviePage() {
  const [movie, setMovie] = useState({});
  const path = useLocation();
  const movieId = parseInt(String(path.pathname).slice(7));
  const searchURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a3827e96de599b6142d695f536ca566d`;
  const base_URL = "https://image.tmdb.org/t/p/original/";

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(searchURL);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [searchURL]);

  // Format Date to show Years only
  const formatDate = (date) => {
    var options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString([], options);
  };

  // const findGenreFromId = (id) => {
  //   return genres.find((g) => g.id === id);
  // };

  // Play trailer on youtube
  const playTrailer = () => {
    fetch(
      `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=66f24d566eb6008394159f46c59d027e&`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let videoKey = data.results[0].key;
        window.open(`https://www.youtube.com/watch?v=${videoKey}`);
      });
  };
  return (
    <div
      className="feature-poster"
      style={{
        backgroundImage: ` linear-gradient(to bottom, transparent 0%, black 100%),url(https://image.tmdb.org/t/p/w1280/${
          movie.backdrop_path || ""
        })`,
      }}
    >
      <Header />
      <div className="mp-container">
        <div className="mp-wrapper-poster">
          <img
            className="mp-poster"
            src={`${base_URL}${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div className="mp-wrapper-info">
            <h1 className="header mp-header">{movie.title}</h1>
            <div className="mp-wrapper-genre">
              {movie?.genres?.map((movie, idx) => {
                return (
                  <span key={idx} className="mp-movie-genre" id="mp-genre">
                    {movie.name}
                  </span>
                );
              })}
            </div>
            <div className="mp-wrapper-detail">
              <span className="mp-movie-detail">
                Score: {movie.vote_average}/10
              </span>
              <span className="mp-movie-detail">
                Date: {formatDate(movie.release_date)}
              </span>
              <span className="mp-movie-detail">
                Runtime: {movie.runtime} minutes
              </span>
            </div>
            <div className="mp-wrapper-overview">
              <p className="mp-overview">{movie.overview}</p>
            </div>
            <div className="mp-wrapper-btn">
              <button
                className="big-btn mp-btn"
                id="active-btn"
                onClick={playTrailer}
              >
                View Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
      <Row title="You might like" fetchURL={requests.fetchTopRated} />
      <Footer />
    </div>
  );
}

export default MoviePage;
