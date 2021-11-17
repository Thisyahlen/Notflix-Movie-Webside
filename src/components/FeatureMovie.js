import React, { useState, useEffect } from "react";
import axios from "../axios";
import { genres } from "../Genre";
import "./FeatureMovie.css";
import requests from "../Request";
import { Link } from "react-router-dom";

function FeatureMovie() {
  const [movie, setMovie] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // Format Date to show Years only
  const formatDate = (date) => {
    var options = { year: "numeric" };
    return new Date(date).toLocaleDateString([], options);
  };

  // Assign genre id to genre name
  const findGenreFromId = (id) => {
    return genres.find((g) => g.id === id);
  };

  // play trailer on youtube
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
    <div className="feature-wrapper">
      <div
        className="feature-poster"
        style={{
          backgroundImage: ` linear-gradient(to bottom, transparent 0%, black 100%),url(https://image.tmdb.org/t/p/w1280/${
            movie?.backdrop_path || ""
          })`,
        }}
      >
        <div className="feature-wrapper-info">
          <h1 className="feature-wrapper-header">{movie?.title}</h1>
          <div className="feature-wrapper-details">
            {movie?.genre_ids?.map((id, idx) => {
              return (
                <span key={idx} className="feature-movie-details" id="genre">
                  {findGenreFromId(id).name}
                </span>
              );
            })}
            <br className="mobile-break" />
            <span className="feature-movie-details" id="date">
              {formatDate(movie?.release_date)}
            </span>
            <span className="feature-movie-details" id="score">
              {movie?.vote_average}/10
            </span>
          </div>

          <div className="feature-wrapper-button">
            <Link to={`movie/${movie?.id}`}>
              <button className="basic-btn fm-btn">More Info</button>
            </Link>
            <button
              className="basic-btn fm-btn"
              id="active-btn"
              onClick={playTrailer}
            >
              View Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureMovie;
