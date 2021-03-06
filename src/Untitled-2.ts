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

  useEffect(() => {
    let user = localStorage.getItem("user");
    console.log(user);
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
      {homePage && !user && (
        <Home
          handleHomePage={handleHomePage}
          handleLoginPage={handleLoginPage}
        />
      )}
      {loginPage && (
        <LoginForm
          handleHomePage={handleHomePage}
          handleUser={handleUser}
          user={user}
        />
      )}
      {user && <JobsPage user={user} />}
    </>
  );
}

export default App;
