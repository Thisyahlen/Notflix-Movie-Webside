import React, { useEffect, useState } from "react";
import CategoryPoster from "./CategoryPoster";
import "./Categories.css";
import "../App.css";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing/?api_key=66f24d566eb6008394159f46c59d027e&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="np-wrapper">
      <h1 className="header">Now Showing in Cinemas</h1>
      <div className="category-panels">
        {movies.map((movie) => {
          return <CategoryPoster key={movie.id} movieObj={movie} />;
        })}
      </div>
    </div>
  );
}

export default NowPlaying;
