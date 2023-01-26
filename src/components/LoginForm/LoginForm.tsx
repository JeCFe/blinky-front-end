import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label className="login-font">Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label className="login-font">Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
