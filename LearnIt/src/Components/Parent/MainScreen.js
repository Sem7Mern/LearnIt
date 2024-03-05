import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mainScreen.css";
// import { type } from "@testing-library/user-event/dist/type";
// import Category from './Category'
// import Makequiz from "./Quiz/Makequiz";
// import MakeDynamic from './Quiz/MakeDynamic'
// import GoogleForm from './Quiz/GoogleForm'
// import Inbox from './notice'
// import Blank from './Blank.jsx'

import "./Chatbot";
import "./Feedback";
import "./Attendence";
import "../Performance/Performance";
import "../Teacher/profile";

function Main() {
  const [students, setStudents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({ class_: "8th" });
  const [isLoading, setIsLoading] = useState(true);
  const [home, sethome] = useState(true);
  const [inbox, setinbox] = useState(false);
  const [category, setcategory] = useState(false);
  const [currentQuiz, setcurrentQuiz] = useState(false);
  const [dynamic, setdynamic] = useState(false);
  const [google, setgoogle] = useState(false);
  const [blank, setblank] = useState(false);
  const [logout, setlogout] = useState(false);
  const [value, setvalue] = useState("")
  const [status, setStatus] = useState([]);
  const [showMenu, setShowMenu] = useState(false); // Define showMenu state




  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:8000/slist', {
          method: "POST", headers: {
            "Content-Type": "application/json",
          }, body: JSON.stringify({ class_: selectedValue.class_ })
        });
        const data = await response.json();
        setStudents(data.students);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setStudents([]);
        setIsLoading(false);
      }
    };

    fetchStudentData();
  }, [selectedValue]);

 

  return (
    <div className="App2">
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation */}
      <div className={`left-nav ${showMenu ? 'show' : ''}`}>
      <ul>
      {/* <Link to="/Chatbot">Go to Destination Page</Link> */}
      <li>
            <i className="fas fa-home"></i>
            <button> <Link to="/Studentprofile">Student Profile</Link>             
            </button>
          </li>
          <li>
            <i className="fas fa-home"></i>
            <button> <Link to="/Chatbot">Chat</Link>             
            </button>
          </li>
          <li>
            <i className="fas fa-home"></i>
            <button> <Link to="/Performance">Performance</Link>             
            </button>
          </li>
          <li>
            <i className="fas fa-home"></i>
            <button> <Link to="/Attendence">Attendance</Link>             
            </button>
          </li>
          <li>
            <i className="fas fa-home"></i>
            <button> <Link to="/Feedback">Feedback</Link>             
            </button>
          </li>
          <li>
            <i className="fas fa-home"></i>
            <button> <Link to="/">Logout</Link>             
            </button>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Main;
