import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPoster.css";

function CategoryPoster(props) {
  const base_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <Link to={`/movie/${props.movieObj.id}`}>
      <img
        className="category-poster"
        src={`${base_URL}${
          props.movieObj.poster_path || props.movieObj.backdrop_path
            ? props.movieObj.poster_path
            : props.movieObj.backdrop_path
        }`}
        alt=""
        onClick={() => {
          console.log(props.movieObj.popularity);
        }}
      />
    </Link>
  );
}

export default CategoryPoster;
