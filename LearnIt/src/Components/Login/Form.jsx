import React , { useState }from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Form.css'

function Form() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathWithoutSlash = currentPath.substring(1);
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: ""})
    const handleSubmit=async (e)=>{
        e.preventDefault();
        localStorage.setItem('data',credentials);
        navigate("/welcome");

    }
    const onChange = (e) => {
        //this will help to change the update note form
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      }
  return (
    <>
        {<span >{pathWithoutSlash} Login</span>}
    <div className='form'>
    <form onSubmit={handleSubmit} >
    <div class="mb-3 row ">
      <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" value={credentials.email} onChange={onChange} name = "email" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 row">
      <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
    </>
  )
}

export default Form