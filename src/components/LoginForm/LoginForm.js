import React, { useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
  // const [email, setEmail] = useState("");
  // const [password, setFormData] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    // setFields({ email: email, password: password });
    console.log(formData);
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
        <Nav />1
      </div>
      <div className="bottom">2</div>
      <div className="form">
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-parent">
              <h4 style={{ fontSize: "30px" }}>Login</h4>
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
              <div className="incorrect-fields">
                <p>Incorrect email address or password</p>
              </div>
              <button type="submit">Login</button>
              <div>
                New to MyJobs? <a href="/">Create an account</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
