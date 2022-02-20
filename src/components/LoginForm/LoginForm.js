import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import "./LoginForm.css";
import Button from "../Button.js/Button";

function LoginForm(props) {
  // const [email, setEmail] = useState("");
  // const [password, setFormData] = useState("");
  const [isLogged, setLogged] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(props);

  useEffect(() => {
    setLogged(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    // setFields({ email: email, password: password });
    console.log(formData);
    if (
      (formData.email === "squareboat@gmail.com" &&
        formData.password === "squareboat") ||
      (formData.email === "sb@gmail.com" && formData.password === "squareboat")
    ) {
      setLogged(true);
      props.handleUser(formData.email);
    } else {
      setLogged(false);
    }
    // axios
    //   .post(`https://jobs-api.squareboat.info/api/v1 /auth/login`, {
    //     email: email,
    //     password: password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <div className="nav-parent">
      <div className="top">
        <Nav handleHomePage={props.handleHomePage} />1
      </div>
      <div className="bottom">2</div>
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
                  className="inputs"
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="pass-input">
                <div className="forgot-label">
                  <p>Password</p>
                  <p>Forgot your password?</p>
                </div>
                <input
                  className="inputs"
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              {!isLogged && (
                <div className="incorrect-fields">
                  <p>Incorrect email address or password</p>
                </div>
              )}
              {/* <button type="submit">Login</button> */}
              <div className="form-submit">
                <Button type="submit" text="Login" />
                <div>
                  New to MyJobs? <a href="/">Create an account</a>
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
