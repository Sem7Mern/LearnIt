import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import { slogin } from "../../service/studentapi";
import { plogin } from "../../service/parentapi";
import { tlogin } from "../../service/teacherapi";
import './Form.css';

function Form() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathWithoutSlash = currentPath.substring(1);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleClick = async (e) => {
    e.preventDefault();
    let a ;
    if (!credentials.email || !credentials.password) {
      setError("Please fill out both email and password!");
      return;
    }
if(pathWithoutSlash === "studentLogin")
{
 a = await slogin(credentials);
 const json = await a.json();

 if (json.success) {
   localStorage.setItem("email", json.email);
   navigate("/welcome");



   
 }

}
else{
  if (pathWithoutSlash === "parentLogin") {
    a = await plogin(credentials);
    const json = await a.json();

    if (json.success) {
      localStorage.setItem("email", json.email);
      navigate("/welcome");



      
    }
  }
  else{
    if (pathWithoutSlash === "teacherLogin") {
      
      a = await tlogin(credentials)
      const json = await a.json();

      if (json.success) {
        localStorage.setItem("email", json.email);
        navigate("/main");
  
  
  
        
      }
    }

  }
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
