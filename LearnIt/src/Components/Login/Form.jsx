import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from "../../service/studentapi";
import './Form.css';

function Form() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathWithoutSlash = currentPath.substring(1);
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError("Please fill out both email and password!");
      return;
    }

    const a = await login(credentials);
    const json = await a.json();

    if (json.success) {
      navigate("/welcome");
    }
  }

  return (
    <div className="login-container">
      <span className="login-heading">{pathWithoutSlash} Login</span>
      <div className="form">
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" onChange={onChange} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
