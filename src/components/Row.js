import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import "./Row.css";
import CategoryPoster from "./CategoryPoster";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  //fetch data
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data?.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h1 className="header">{title}</h1>
      <div className="row-panels">
        {/* render movie panels */}
        {movies.map((movie) => {
          return <CategoryPoster key={movie.id} movieObj={movie} />;
        })}
      </div>
    </div>
  );
}

export default Row;
