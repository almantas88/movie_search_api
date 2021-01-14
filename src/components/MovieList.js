import React from "react";
import { ReactComponent as Movie } from "../images/movie.svg";


import "./MovieList.css";

function MovieList(props) {
  return (
    <div className="container_list">
        <Movie className="svg_list" />
      <input className="title" value={props.title} onChange={props.onChangeFunc}></input>
      <p className="placeholder">Enter movie name</p>
      <div className="line"></div>

    </div>
  );
}

export default MovieList;
