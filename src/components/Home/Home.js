import React, { useState } from "react";
import Card from "../Cards/Cards";
import Nav from "../Nav/Nav";
import "./Home.css";

function Home() {
  return (
    <div className="parent">
      <div className="header">
        <div className="login-title">
          <Nav />
        </div>
        <div className="page-title">
          <div className="page-text">
            <div>
              <div
                style={{ fontSize: "80px", fontWeight: "bold", color: "white" }}
              >
                Welcome to
              </div>
              <div>
                <span style={{ fontSize: "80px", fontWeight: "bold" }}>My</span>
                <span
                  style={{
                    fontSize: "80px",
                    fontWeight: "bold",
                    color: "#43AFFF",
                  }}
                >
                  Jobs
                </span>
              </div>
            </div>
          </div>
          <div className="page-image">
            <div>
              <img className="image" src="mainpage.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
