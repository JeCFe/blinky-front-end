import { setMaxIdleHTTPParsers } from "http";
import React, { SetStateAction, useState } from "react";
import "./LoginForm.css";

interface props {
  setUserName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const LoginForm = (props: props) => {
  const [name, setName] = useState<string>();

  const updateName = (event: any) => {
    setName(event.target.value);
  };
  const handleSubmit = (event: any) => {
    props.setUserName(name);
  };

  return (
    <div>
      <div className="login-form">
        <div className="form-box solid">
          <form onSubmit={handleSubmit}>
            <h1 className="login-text">Sign In</h1>
            <label className="login-font">Username</label>
            <br></br>
            <input
              id="username"
              type="text"
              name="username"
              className="login-box"
              value={name as string}
              onChange={(e) => updateName(e)}
            />
            <input
              type="submit"
              value="LOGIN"
              className="login-btn"
              onSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
