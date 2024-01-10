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
           {localStorage.getItem("email") === null? <li className="nav-item dropdown">
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
            </li>:null}
            <li className="nav-item">
            {localStorage.getItem("email") !== null?<a className="nav-link" style={{color:"white"}} onClick={localStorage.removeItem("email")}>Log out</a>:null} 
            </li>
          </ul>
         
        </div>
      </div>
            
    </nav>
  );
};

export default Navbar;
