import React, { useState } from "react";
import Card from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Button from "../Button.js/Button";
import "./Home.css";
import liva from "./liva.png";
import Solaytic from "./solaytic@2x.png";

function Home(props) {
  console.log({ props });
  const { handleLoginPage, handleHomePage } = props;
  const maps = [1, 2, 3];
  return (
    <div className="parent">
      <div className="header">
        <div className="login-title">
          <Nav
            handleLoginPage={handleLoginPage}
            handleHomePage={handleHomePage}
          />
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
          <div>
            <Card style={{ width: "360px", height: "200px" }}>
              <div className="cards-home">
                <h1>Get More</h1>
                <h1>Mobility</h1>
              </div>
              <div className="cards-home-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </div>
            </Card>
          </div>
          <div>
            <Card style={{ width: "360px", height: "200px" }}>
              <div className="cards-home">
                <h1>Organise your</h1>
                <h1>Candidates</h1>
              </div>
              <div className="cards-home-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </div>
            </Card>
          </div>
          <div>
            <Card style={{ width: "360px", height: "200px" }}>
              <div className="cards-home">
                <h1>Verify their</h1>
                <h1>Abilities</h1>
              </div>
              <div className="cards-home-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </div>
            </Card>
          </div>
        </div>
        <div className="companies">
          <div className="company-row1">
            <div>
              <img src={Solaytic} />
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
