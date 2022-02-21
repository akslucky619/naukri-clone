import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import "./LoginForm.css";
import Button from "../Button.js/Button";

function LoginForm(props) {
  const [isLogged, setLogged] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setLogged(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // api not working!!

    const fetchlogin = async () => {
      const result = await axios.post(
        `https://jobs-api.squareboat.info/api/v1/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      // .then((res) => {
      //   props.handleUser(res.data.data.token);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      props.handleUser(result.data.data.token);
    };
    fetchlogin();
  };

  return (
    <div className="nav-parent">
      <div className="top">
        <Nav
          loginPage={props.loginPage}
          handleHomePage={props.handleHomePage}
        />
      </div>
      <div className="bottom"></div>
      <div className="form">
        <div style={{ height: "100%" }}>
          <form style={{ height: "100%" }} onSubmit={(e) => handleSubmit(e)}>
            <div className="form-parent">
              <div className="form-title">
                <h4 style={{ fontSize: "30px" }}>Login</h4>
              </div>
              <div className="email-input">
                <p>Email Address</p>
                <input
                  name="email"
                  className={!isLogged ? "input-danger" : "inputs"}
                  type="text"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="pass-input">
                <div className="forgot-label">
                  <p>Password</p>
                  <a
                    style={{ color: " #43afff" }}
                    href="https://www.google.com/search?client=opera&q=how+to+cure+dumbness&sourceid=opera&ie=UTF-8&oe=UTF-8"
                    target="_blank"
                  >
                    Forgot your password?
                  </a>
                </div>
                <input
                  className={!isLogged ? "input-danger" : "inputs"}
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              {!isLogged && (
                <div
                  style={{ color: "#FF333380" }}
                  className="incorrect-fields"
                >
                  <p>Incorrect email address or password</p>
                </div>
              )}
              {/* <button type="submit">Login</button> */}
              <div className="form-submit">
                <Button
                  styles={{
                    backgroundColor: "#43AFFF",
                    width: "185px",
                    height: "55px",
                    color: "white",
                  }}
                  type="submit"
                  text="Login"
                />
                <div>
                  New to MyJobs?{" "}
                  <a style={{ color: " #43afff" }} href="/" target="_blank">
                    Create an account
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
