import React from "react";
import Categories from "../components/Categories";
import FeatureMovie from "../components/FeatureMovie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomeScreen.css";
import "../App.css";
import Row from "../components/Row";
import requests from "../Request";

function HomeScreen() {
  return (
    <div>
      <Header />
      <FeatureMovie />
      <div className="main-container">
        <Row title="Now Playing" fetchURL={requests.fetchNowPlaying} />
        <Row title="Trending Now" fetchURL={requests.fetchComedyMovies} />
        <Categories />
        <Footer title="Hello World" />
      </div>
    </div>
  );
}

export default HomeScreen;
