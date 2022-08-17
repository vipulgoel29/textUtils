// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    console.log(alert.msg);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeLight = () => {
    setMode("white");
    console.log(mode);
    showAlert(
      `${mode[0].toUpperCase()}${mode.substring(1)} ${
        mode === "white" ? "" : "dark"
      } mode has been enabled`,
      "success"
    );
    document.title = "TextUtils-LightMode";
  };

  const toggleModeRed = () => {
    setMode("red");
    console.log(mode);
    showAlert(
      `${mode[0].toUpperCase()}${mode.substring(1)} ${
        mode === "white" ? "" : "dark"
      } mode has been enabled`,
      "success"
    );
  };

  const toggleModeBlue = () => {
    setMode("blue");
    console.log(mode);
    showAlert(
      `${mode[0].toUpperCase()}${mode.substring(1)} ${
        mode === "white" ? "" : "dark"
      } mode has been enabled`,
      "success"
    );
  };

  const toggleModeGreen = () => {
    setMode("green");
    console.log(mode);
    showAlert(
      `${mode[0].toUpperCase()}${mode.substring(1)} ${
        mode === "white" ? "" : "dark"
      } mode has been enabled`,
      "success"
    );
  };
  document.querySelector("body").style.backgroundColor = mode;
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleModeLight={toggleModeLight}
        toggleModeBlue={toggleModeBlue}
        toggleModeGreen={toggleModeGreen}
        toggleModeRed={toggleModeRed}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}

        {/* <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showalert={showAlert}
                />
              } */}
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showalert={showAlert}
        />

        {/* </Routes> */}
        {/* <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showalert={showAlert}
        /> */}
        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
