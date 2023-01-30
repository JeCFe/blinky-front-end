import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState<string>();
  const navigate = useNavigate();

  const updateName = (event: any) => {
    setName(event.target.value);
  };
  const handleSubmit = (event: any) => {
    navigate(`/booking/${name}`);
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
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
