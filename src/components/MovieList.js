import React from "react";

import { ReactComponent as Movie } from "../images/movie.svg";

import "./MovieList.css";

function MovieList(props) {
  return (
    <div className="container_list">
      <Movie className="svg_list" />
      <input
        ref={props.forwardedRef}
        className="title"
        value={props.title}
        onChange={props.onChangeFunc}
        onBlur={props.isNOTInputFocusedHandler}
       onFocus={props.isInputFocusedHandler}
      ></input>
      <p className="placeholder">Enter movie name</p>
      <div className="line"></div>
      {props.result
        ? props.result.splice(0, 8).map((item) => {
            return (
              <div
                key={item.id}
                className="list_item"
                onClick={() => props.movieChoiceHandler(item)}
              >
                <p className="title">{item.title}</p>
                <p className="placeholder">
                  {item.vote_average} Rating,{" "}
                  {item.release_date
                    ? item.release_date.split("-")[0]
                    : "No year"}
                </p>
              </div>
            );
          })
        : "No movies found"}
    </div>
  );
}

export default MovieList;
