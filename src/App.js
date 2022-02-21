import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import JobsPage from "./components/JobsPage/JobsPage";

function App() {
  const [user, setUser] = useState(null);
  const [loginPage, setLoginPage] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [logoutpopUp, setLogoutpopUp] = useState(false);
  const [candidates, seCandidates] = useState({});
  const [show, setShow] = useState(false);
  const [loginmsg, setLoginmsg] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    setUser(user);
  }, [user]);

  const handleLoginPage = () => {
    setLoginPage(true);
    setHomePage(false);
  };

  const handleUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setLoginPage(false);
    setHomePage(false);
  };

  const handleHomePage = () => {
    setLoginPage(false);
    setHomePage(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setHomePage(true);
    setLoginPage(false);
    setLogoutpopUp(true);
    setLoginmsg(null);
  };

  const closeLogoutPopUp = () => {
    setLogoutpopUp(false);
  };

  const handleLoginMsg = (msg) => {
    setLoginmsg(msg);
  };

  const getOneJobCandidates = (jobId, isShow) => {
    const token = JSON.parse(user);
    const fetchcandidates = async () => {
      const result = await axios(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = result.data;
      seCandidates(data);
      // data.length ? seCandidates(data) : seCandidates([]);
      // result.data ? seCandidates(result.data.data) : seCandidates([]);
      // seCandidates(result.data);
    };

    fetchcandidates();
    closeModal(isShow);
  };

  const closeModal = (isShow) => {
    setShow(!isShow);
  };

  return (
    <>
      {homePage && !user && (
        <Home
          handleHomePage={handleHomePage}
          handleLoginPage={handleLoginPage}
          logoutpopUp={logoutpopUp}
          closeLogoutPopUp={closeLogoutPopUp}
        />
      )}
      {loginPage && (
        <LoginForm
          loginPage={loginPage}
          handleHomePage={handleHomePage}
          handleUser={handleUser}
          user={user}
          handleLoginMsg={handleLoginMsg}
          loginmsg={loginmsg}
        />
      )}
      {user && (
        <JobsPage
          getOneJobCandidates={getOneJobCandidates}
          handleLogout={handleLogout}
          user={user}
          candidates={candidates}
          show={show}
          closeModal={closeModal}
          candidates={candidates}
        />
      )}
    </>
  );
}

export default App;
