import React, {useState} from "react";
import { ReactComponent as Movie } from "../images/movie.svg";
import { ReactComponent as Search } from "../images/search.svg";

import "./Header.css";
import MovieList from "./MovieList";

function Header() {

const [movieTitle, setMovieTitle] = useState("");

const movieTitleHandler = (e) => {
  setMovieTitle(e.target.value);
}

  return (
    <React.Fragment>
    <div className="container">
      <div className="container_input">
        <Movie className="svg" />
        <input className="input" placeholder="Enter movie name" value={movieTitle} onChange={movieTitleHandler}/>
      </div>
      <div className="button"><Search className="svg1" /></div>
    </div>
    {movieTitle.length >= 3 ? <MovieList title={movieTitle} onChangeFunc={movieTitleHandler}/> : null}
    
    </React.Fragment>
  );
}

export default Header;
