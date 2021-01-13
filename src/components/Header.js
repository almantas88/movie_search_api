import React from "react";
import { ReactComponent as Movie } from "../images/movie.svg";
import { ReactComponent as Search } from "../images/search.svg";

import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="container_input">
        <Movie className="svg" />
        <input className="input" placeholder="Enter movie name"/>
      </div>
      <div className="button"><Search className="svg1" /></div>
    </div>
  );
}

export default Header;
