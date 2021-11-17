import React, { useState } from "react";
import requests from "../Request";
import "./Categories.css";
import "../App.css";
import Row from "./Row";

function Categories() {
  const [category, setCategory] = useState("Action");

  const categoryFetch = {
    Action: requests.fetchActionMovies,
    Comedy: requests.fetchComedyMovies,
    Horror: requests.fetchHorrorMovies,
    Romance: requests.fetchRomanceMovies,
    Documentary: requests.fetchDocumentaries,
  };

  const fetchURL = categoryFetch[category];

  return (
    <div className="categories">
      <div>
        <h1 className="header">Browse Categories</h1>
      </div>
      <div className="category-buttons">
        <button
          className="basic-btn"
          id="action"
          onClick={() => {
            setCategory("Action");
          }}
        >
          Action
        </button>
        <button
          className="basic-btn"
          id="comedy"
          onClick={() => {
            setCategory("Comedy");
          }}
        >
          Comedy
        </button>
        <button
          className="basic-btn"
          id="horror"
          onClick={() => {
            setCategory("Horror");
          }}
        >
          Horror
        </button>
        <button
          className="basic-btn"
          id="romance"
          onClick={() => {
            setCategory("Romance");
          }}
        >
          Romance
        </button>
        <button
          className="basic-btn"
          id="documentary"
          onClick={() => {
            setCategory("Documentary");
          }}
        >
          Documentary
        </button>
      </div>

      <Row title={category} fetchURL={fetchURL} />
    </div>
  );
}

export default Categories;
