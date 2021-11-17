import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../components/SearchBar";

function Header() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  //toggle the state for header background
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://dubbsong.github.io/notflix/static/media/logo.854b40f2.png"
          alt=""
        />
        {/* <SearchBar /> */}

        <Link to="/profile">
          <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
