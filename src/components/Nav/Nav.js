import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "../Button.js/Button";
import NamedDiv from "../NamedDiv/NamedDiv";
import "./Nav.css";

function Nav(props) {
  console.log({ props }, "in nav");

  const [pop, setpop] = useState(false);

  const handlePop = () => {
    setpop(!pop);
  };

  return (
    <div>
      <div className="login-bar">
        <div onClick={props.handleHomePage} className="title-text">
          <span style={{ color: "white" }}>My</span>
          <span style={{ color: "#43AFFF" }}>Jobs</span>
        </div>
        <div className="title-button">
          {!props.user && !props.loginPage && (
            // <button onClick={props.handleLoginPage}>
            //   <nav>
            //   <Link to="/login">Login/Signup</Link>
            // </nav>
            //   Login/Signup
            // </button>
            <Button
              styles={{
                backgroundColor: "#33557E",
                color: "white",
                border: "1px solid #43AFFF",
              }}
              onClick={props.handleLoginPage}
              text="Login/Signup"
            />
          )}
          {props.user && (
            <div className="logout-pop">
              <div>
                <NamedDiv />
              </div>
              <div style={{ cursor: "pointer" }} onClick={handlePop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.343"
                  height="7.569"
                  viewBox="0 0 13.343 7.569"
                >
                  <path
                    id="Icon_awesome-caret-down"
                    data-name="Icon awesome-caret-down"
                    d="M1.692,13.5H13.239a.9.9,0,0,1,.633,1.53L8.1,20.806a.9.9,0,0,1-1.27,0L1.059,15.03A.9.9,0,0,1,1.692,13.5Z"
                    transform="translate(-0.794 -13.5)"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
          )}
          {pop && (
            <div
              style={{ cursor: "pointer" }}
              onClick={props.handleLogout}
              className="pop-div"
            >
              LogOut
            </div>
          )}
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
