import React, { useState, useRef } from "react";

import "./Header.css";
// import SearchInput from "./SearchInput";

// function SearchInput() {
//   return (
//     <div>
//       {search}
//       {isExpanded}
//       <div className="input-frame">
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Trending: Squid Game"
//           ref={clearInput}
//           onChange={onChangeSearchInput}
//           onBlur={onBlurSearchInput}
//         />
//         {exitIcon}
//       </div>
//     </div>
//   );
// }

function SearchBar() {
  //Search Input Slide In Transition onClick Search Icon
  const duration = 0.5;

  const beforeTransition = {
    transition: `width ${duration}s ease`,
    width: 0,
  };

  const afterTransition = {
    entering: { width: 0 },
    entered: { width: 500 },
    exiting: { width: 500 },
    exited: { width: 0 },
  };

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [exitIcon, setExitIcon] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=9fe26dae5b06696320d4f6f4bfae28a0&language=en-US&query=${search}&page=1&include_adult=false`;

  //Call Movie API
  const searchMovies = async (e) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  //Typing in Search Input
  const onChangeSearchInput = (e) => {
    setSearch(e.target.value);
    setExpanded(true);
    setExitIcon(true);
  };

  const clearInput = useRef();
  const onMouseDownClearInput = () => {
    clearInput.current.value = "";
    setExitIcon();
    setExpanded();
  };

  const onBlurSearchInput = () => {
    setExpanded();
  };

  const onClickSearchIcon = () => {
    console.log(showSearchInput);
    setShowSearchInput(true);
  };

  return (
    <form className="search-bar">
      {/* <Transition in={showSearchInput} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...beforeTransition,
              ...afterTransition[state],
            }}
          > */}
      {/* <div> */}
      {/* {search} */}
      {/* {isExpanded ? <SearchArea movies={movies} /> : null} */}
      <div className="input-frame">
        <input
          className="search-input"
          type="text"
          placeholder="Trending: Squid Game"
          ref={clearInput}
          onBlur={onBlurSearchInput}
        />
        {exitIcon ? (
          <button
            className="exit-icon"
            onMouseDown={onMouseDownClearInput}
          ></button>
        ) : null}
      </div>
      {/* </div>
          </div>
        )}
      </Transition> */}

      <button className="search-icon" onClick={onClickSearchIcon}></button>
    </form>
  );
}

export default SearchBar;
