import React from "react";
import { ReactComponent as Movie } from "../images/movie.svg";

import "./MovieList.css";

function MovieList(props) {
  console.log(props.result);
  return (
    <div className="container_list">
      <Movie className="svg_list" />
      <input
        className="title"
        value={props.title}
        onChange={props.onChangeFunc}
      ></input>
      <p className="placeholder">Enter movie name</p>
      <div className="line"></div>
      {props.result.map((item) => {
        return (
          <div className="list_item">
            <p className="title">{item.title}</p>
            <p className="placeholder">
            {item.rating} Rating, {item.years}
            </p>
            
          </div>
        );
      })}
      
    </div>
  );
}

export default MovieList;
