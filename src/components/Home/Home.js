import React, { useState } from "react";
import Card from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Button from "../Button.js/Button";
import "./Home.css";
import liva from "./liva.png";

function Home() {
  const maps = [1, 2, 3];
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
                <span
                  style={{
                    fontSize: "80px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  My
                </span>
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
              <div>
                <Button
                  styles={{ backgroundColor: "#43AFFF", color: "white" }}
                  text="Get Started"
                />
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
        <div className="why-us">Why Us</div>
        <div className="home-cards">
          {maps.map((map) => (
            <div>
              <Card style={{ width: "340px", height: "190px" }} />
            </div>
          ))}
        </div>
        <div className="companies">
          <div className="company-row1">
            <div>
              <img src={liva} />
            </div>
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
          </div>
          <div className="company-row2">
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
