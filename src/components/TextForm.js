import React, { useState } from "react";
// import styled from 'styled-components';
// import PropTypes from "prop-types";

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

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    setText(text.toUpperCase());
    props.showalert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    setText(text.toLowerCase());
    props.showalert("Converted to lowercsae", "success");
  };
  const findWord = () => {
    if (text) {
      const word = prompt("Enter the word do you want to search");

      text.includes(word)
        ? props.showalert("Word was found", "success")
        : props.showalert("Word was not found", "warning");
    } else {
      props.showalert("There was no text", "warning");
    }
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("Neew text");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "white" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "white" ? "white" : "black",
              color: props.mode === "white" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "white" ? "dark" : "light"
          } mx-2`}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "white" ? "dark" : "light"
          } mx-2`}
          onClick={handleLowClick}
        >
          Convert to lowercsae
        </button>
        <button
          className={`btn btn-${
            props.mode === "white" ? "dark" : "light"
          } mx-2`}
          onClick={findWord}
        >
          Find word
        </button>
        <button
          className={`btn btn-${
            props.mode === "white" ? "dark" : "light"
          } mx-2`}
          onClick={findWord}
        >
          Find word
        </button>
      </div>
      <div
        className="container my-3 "
        style={{
          color: props.mode === "white" ? "#042743" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words,{text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} min will be taken</p>
        <h2>Preview</h2>
        <p>{text ? text : "Enter something to preview it"}</p>
      </div>
    </>
  );
}

// #endregion
