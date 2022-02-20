import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  console.log({ props }, 'in nav');
  return (
    <div>
      <div className="login-bar">
        <div onClick={props.handleHomePage} className="title-text">
          <span style={{ color: "white" }}>My</span>
          <span style={{ color: "#43AFFF" }}>Jobs</span>
        </div>
        <div className="title-button">
          <button onClick={props.handleLoginPage}>
            {/* <nav>
              <Link to="/login">Login/Signup</Link>
            </nav> */}
            Login/Signup
          </button>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          height: "1px",
          backgroundColor: "white",
          position: "absolute",
          left: "5%",
          top: "75px",
        }}
      ></div>
    </div>
  );
}
export default Nav;
