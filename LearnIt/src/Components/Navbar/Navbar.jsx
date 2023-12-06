<<<<<<< HEAD
import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">


      <div className="container-fluid">
        <a className="navbar-brand" href="#">LearnIt</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Login
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/teacherLogin">
                    Teacher Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/parentLogin">
                    Parent Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/studentLogin">
                   Student Login
                  </a>
                </li>
               
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Log out</a>
            </li>
          </ul>
         
        </div>
      </div>
            
    </nav>
  );
};

export default Navbar;
=======
import React from 'react'

import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Navbar() {
  return (
    <div className="n-wrapper">

      <div className="n-left">
        <div className='logo'></div>
        <div className="n-name">LearnIt</div>
        {/* for toggle component usecontext hook is used which helps to change the state of darkmode and change buttom position*/}

      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link to='/home' >
              <li>Home</li>
            </Link>
            <Link to='Student' >
              <li>Student Login</li>
            </Link>
            <Link to='/Teacher' >
              <li>Teacher Login</li>
            </Link>
            <Link to='/Parent' >
              <li>Parent Login</li>
            </Link>
          </ul>
        </div>
        <Link to='Contact' >


        </Link>
      </div>

    </div>
  )
}

export default Navbar
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
