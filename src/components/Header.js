//https://api.themoviedb.org/3/search/movie?api_key=9c01a83c0531a7e54cf19423b2dbd914&language=en-US&query=

import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as Movie } from "../images/movie.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { CSSTransition } from "react-transition-group";

import "./Header.css";
import MovieList from "./MovieList";
import MovieContainer from "./MovieContainer";

function Header() {
  const [movieTitle, setMovieTitle] = useState("");
  const [results, setResults] = useState([]);
  const [showList, setShowList] = useState(false);
  const [choosenMovie, setChosenMovie] = useState({});


  const refInput = useRef(null);
  const refInputSecond = useRef(null);

  const isInputFocusedHandler = (e) => {
    setShowList(true);
    console.log("1");
  };

  const isNOTInputFocusedHandler = (e) => {
    setShowList(false);
    console.log("2");
  };

  const movieTitleHandler = (e) => {
    setMovieTitle(e.target.value);
    console.log("3");
  };

  useEffect(() => {
    if (movieTitle.length >= 3) {
      returnedFunction();
      setShowList(true);
      setTimeout(() => {
        refInput.current.focus();
      }, 0);
    } else {
      setShowList(false);

      refInputSecond.current.focus();
    }
    console.log("4");
  }, [movieTitle]);

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  var returnedFunction = debounce(function () {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9c01a83c0531a7e54cf19423b2dbd914&language=en-US&query=${movieTitle}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, 500);

  var movieChoiceHandler = function (item) {
    setChosenMovie(item);

    setMovieTitle(item.title);
    setShowList(false);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="container_input">
          <Movie className="svg" />
          <input
            ref={refInputSecond}
            className="input"
            placeholder="Enter movie name"
            value={movieTitle}
            onChange={movieTitleHandler}
          />
        </div>
        <div className="button">
          <Search className="svg1" />
        </div>
      </div>
      <div className="bottom_container"></div>

      <CSSTransition
        in={showList}
        timeout={300}
        classNames="appear"
        unmountOnExit
      >
        <MovieList
          isInputFocusedHandler={isInputFocusedHandler}
          isNOTInputFocusedHandler={isNOTInputFocusedHandler}
          movieChoiceHandler={movieChoiceHandler}
          forwardedRef={refInput}
          result={results}
          title={movieTitle}
          onChangeFunc={movieTitleHandler}
        />
      </CSSTransition>

      <MovieContainer />
    </React.Fragment>
  );
}

export default Header;
