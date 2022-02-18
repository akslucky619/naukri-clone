import React from "react";
import Nav from "../Nav/Nav";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="nav-parent">
      <div className="top">
        <Nav />1
      </div>
      <div className="bottom">2</div>
      <div className="form">
        <div>
          <form>
            <div className="form-parent">
              <h4 style={{ fontSize: "30px" }}>Login</h4>
              <p>Email Address</p>
              <input className="inputs" type="text" />
              <div className="forgot-label">
                <p>Password</p>
                <p>Forgot your password?</p>
              </div>
              <input className="inputs" type="text" />
              <div className="incorrect-fields">
                <p>Incorrect email address or password</p>
              </div>
              <button>Login</button>
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
