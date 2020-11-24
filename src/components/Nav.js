import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = (props) => {
  
  return (
      <nav>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            id="artist"
            placeholder="Search artist"
            value={props.inputValue}
            onChange={props.handleInput}
          />
          <Link
            to={{
              pathname: `/artistinfo/${props.input.inputValue}`,
            }}
          >
            <button className="search-button" type="submit">Search</button>
          </Link>
        </div>
        <img src="https://www.last.fm/static/images/logo_static.adb61955725c.png" alt="App Logo" />
      </nav>
  );
};

export default Nav;
