import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="login-bar">
        <div className="title-text">
          <span style={{ color: "white" }}>My</span>
          <span style={{ color: "#43AFFF" }}>Jobs</span>
        </div>
        <div className="title-button">
          <button>
            <nav>
              <Link to="/login">Login/Signup</Link>
            </nav>
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
          top: "50px",
        }}
      ></div>
    </div>
  );
}
export default Nav;
