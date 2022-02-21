import React, { useState } from "react";
import Card from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Button from "../Button.js/Button";
import liva from "./liva.png";
import Solaytic from "./solaytic@2x.png";
import velocity from "../../images/velocity.png";
import idea from "../../images/idea.png";
import kanba from "../../images/kanba.png";
import lighting from "../../images/lighting.png";
import ztos from "../../images/ztos.png";
import "./Home.css";

function Home(props) {
  const { handleLoginPage, handleHomePage, closeLogoutPopUp, logoutpopUp } =
    props;

  return (
    <div className="parent">
      <div className="header">
        <div className="login-title">
          <Nav
            handleLoginPage={handleLoginPage}
            handleHomePage={handleHomePage}
          />
          {logoutpopUp && (
            <div className="logout-success">
              <div className="log-close" onClick={closeLogoutPopUp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M17.434,13.979h0l-4.55-4.551,4.55-4.551h0a.47.47,0,0,0,0-.663l-2.15-2.15a.47.47,0,0,0-.663,0h0L10.071,6.616,5.52,2.065h0a.47.47,0,0,0-.663,0l-2.15,2.15a.47.47,0,0,0,0,.663h0L7.258,9.428,2.708,13.979h0a.47.47,0,0,0,0,.663l2.15,2.15a.47.47,0,0,0,.663,0h0l4.551-4.551,4.551,4.551h0a.47.47,0,0,0,.663,0l2.15-2.15a.47.47,0,0,0,0-.663Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#303f60"
                  />
                </svg>
              </div>
              <div className="log-title">Logout</div>
              <div style={{ marginLeft: "20px" }}>
                You have successfully logged out
              </div>
            </div>
          )}
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
              <img src={velocity} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
            <div>
              <img src={idea} />
            </div>{" "}
            <div>
              <img src={liva} />
            </div>{" "}
          </div>
          <div className="company-row2">
            <div>
              <img src={kanba} />
            </div>{" "}
            <div>
              <img src={lighting} />
            </div>{" "}
            <div>
              <img src={ztos} />
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
