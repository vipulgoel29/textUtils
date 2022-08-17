import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
export default function Navbar(props) {
  const buttonStyle = (color) => {
    return {
      width: "30px",
      height: "30px",
      backgroundColor: color,
      marginRight: "15px",
      borderRadius: "50%",
      border: "none",
      outline: "2px solid black",
      outlineOffset: "3px",
    };
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "white" ? "light" : "dark"
      } bg-${props.mode === "white" ? "light" : "dark"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div>
            <button
              className=""
              style={buttonStyle("white")}
              onClick={props.toggleModeLight}
            ></button>
            <button
              className=""
              style={buttonStyle("blue")}
              onClick={props.toggleModeBlue}
            ></button>
            <button
              className=""
              style={buttonStyle("green")}
              onClick={props.toggleModeGreen}
            ></button>
            <button
              className=""
              style={buttonStyle("red")}
              onClick={props.toggleModeRed}
            ></button>
          </div>
          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
// };

// Navbar.defaultProps = {
//   title: "Set title here",
//   about: "About",
// };
