//https://api.themoviedb.org/3/search/movie?api_key=9c01a83c0531a7e54cf19423b2dbd914&language=en-US&query=

import React, {useState} from "react";
import { ReactComponent as Movie } from "../images/movie.svg";
import { ReactComponent as Search } from "../images/search.svg";

import "./Header.css";
import MovieList from "./MovieList";

function Header() {

const [movieTitle, setMovieTitle] = useState("");
const [results, setResults] = useState([{
  title: "Bananas",
  rating: 5,
  years: 2010
},
{
  title: "Bananas",
  rating: 5,
  years: 2015
}
,
{
  title: "Bananas",
  rating: 5,
  years: 2015
}
,
{
  title: "Bananas",
  rating: 5,
  years: 2015
},
{
  title: "Bananas",
  rating: 5,
  years: 2015
},
{
  title: "Bananas",
  rating: 5,
  years: 2015
},
{
  title: "Bananas",
  rating: 5,
  years: 2015
},
{
  title: "Bananas",
  rating: 5,
  years: 2015
}
]);

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
    <div className="bottom_container"></div>
    {movieTitle.length >= 3 ? <MovieList result={results} title={movieTitle} onChangeFunc={movieTitleHandler}/> : null}
    
    </React.Fragment>
  );
}

export default Header;
