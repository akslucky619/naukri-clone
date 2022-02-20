import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import JobsPage from "./components/JobsPage/JobsPage";

function App() {
  const [user, setUser] = useState(null);
  const [loginPage, setLoginPage] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [currentPage, setPage] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    console.log(user);
    setUser(user);
  }, [user]);

  useEffect(() => {
    if (!currentPage && !localStorage.getItem("page")) {
      setPage("home");
    }
    let page = localStorage.getItem("page");
    console.log(page);
    setPage(page);
  }, [currentPage]);

  const handleLoginPage = () => {
    localStorage.setItem("page", "login");
    setPage("login");
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
    localStorage.setItem("page", "home");
    setPage("home");
    setLoginPage(false);
    setHomePage(true);
  };

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginForm handleUser={handleUser} user={user} />}
        />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes> */}
      {homePage && !user && currentPage === "home" && (
        <Home
          handleHomePage={handleHomePage}
          handleLoginPage={handleLoginPage}
        />
      )}
      {loginPage && currentPage === "login" && (
        <LoginForm
          handleHomePage={handleHomePage}
          handleUser={handleUser}
          user={user}
        />
      )}
      {user && <JobsPage />}
    </>
  );
}

export default App;
