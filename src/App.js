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
  const [candidates, seCandidates] = useState([]);

  useEffect(() => {
    let user = localStorage.getItem("user");
    // console.log(user);
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
  };

  const closeLogoutPopUp = () => {
    setLogoutpopUp(false);
  };

  // const getOneJobCandidates = (jobId) => {
  //   const fetchcandidates = async () => {
  //     const result = await axios(
  //       `https://jobs-api.squareboat.info/api/v1 /recruiters/jobs/4{jobId}/candidates`,
  //       { headers: { Authorization: `${user}` } }
  //     );
  //     seCandidates(result.data);

  //     fetchcandidates();
  //   };
  // };

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
        />
      )}
      {user && (
        <JobsPage
          // getOneJobCandidates={getOneJobCandidates}
          handleLogout={handleLogout}
          user={user}
          candidates={candidates}
        />
      )}
    </>
  );
}

export default App;
