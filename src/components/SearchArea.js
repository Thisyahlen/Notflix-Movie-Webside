import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./SearchArea.css";

function SearchArea({ movies }) {
  console.log(movies);
  const base_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="search-area">
      <div className="empty-area"></div>
      <div className="display-area">
        {movies.map((movie) => {
          return (
            <div className="movie-container">
              <div className="search-thumbnail">
                <img
                  class="search-img"
                  src={`${base_URL}${movie.poster_path}`}
                />
              </div>
              <div className="search-movie-name">{movie.title} </div>
              <div className="search-rating">
                {movie.vote_average}
                <div className="rating-star-icon">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchArea;
