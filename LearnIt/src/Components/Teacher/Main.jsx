import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./alkesh.css";
import { type } from "@testing-library/user-event/dist/type";
import Category from './Category'
import OptionsComponent from "./Options.jsx"; // Renamed to avoid conflict with state name
import Makequiz from "./Quiz/Makequiz";
import MakeDynamic from './Quiz/MakeDynamic'
import GoogleForm from './Quiz/GoogleForm'
import Inbox from './notice'
import Blank from './Blank.jsx'

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Main() {
  const [students, setStudents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({ class_: "8th" });
  const [isLoading, setIsLoading] = useState(true);
  const [home, sethome] = useState(true);
  const [inbox, setinbox] = useState(false);
  const [category, setcategory] = useState(false);
  const [currentQuiz, setcurrentQuiz] = useState(false);
  const [dynamic, setdynamic] = useState(false);
  const [options, setOptions] = useState(false); // Changed variable name to avoid conflict
  const [blank, setblank] = useState(false);
  const [logout, setlogout] = useState(false);

  const [value, setvalue] = useState("")
  const [status, setStatus] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

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

  const optionsList = [
    { value: "8th", label: "8th" },
    { value: "9th", label: "9th" },
    { value: "10th", label: "10th" },
  ];

  const handleSelectChange = (e) => {
    setSelectedValue({ class_: e.target.value });
  };

  const setsome = (value) => {
    switch (value) {
      case "home":
        sethome(true);
        setcategory(false);
        setinbox(false);
        setcurrentQuiz(false);
        setdynamic(false);
        setOptions(false);
        setblank(false);
        break;
      case "inbox":
        sethome(false);
        setcategory(false);
        setinbox(true);
        setcurrentQuiz(false);
        setdynamic(false);
        setOptions(false);
        setblank(false);
        break;
      case "category":
        sethome(false);
        setcategory(true);
        setinbox(false);
        setcurrentQuiz(false);
        setdynamic(false);
        setOptions(false);
        setblank(false);
        break;
      case "options":
        sethome(false);
        setcategory(false);
        setinbox(false);
        setcurrentQuiz(false);
        setdynamic(false);
        setOptions(true);
        setblank(false);
        break;
    
    }
  }

  return (
    <div className="App2">
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
 <div className="navbarnew">
  
 </div>
      {/* Navigation */}
      <div className={`left-nav ${showMenu ? 'show' : ''}`}>
      <h1>
        Learnit
        </h1>
          
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <button onClick={() => { setsome("home") }}>
              Home
            </button>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("inbox") }}>Inbox</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("category") }}>Category</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("options") }}>Make a Quiz</button>
          </li>
        
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("logout") }}>Logout</button>
          </li>
        </ul>
      </div>
      {/* Main content */}
      <div style={{ position: "relative", top: "10px", height: "auto", overflow: "auto", width: "100%" }}>
        {home && (
          <div className="main-contentteacher">
            <div className="welcome-msg">
              <h1>Good Morning, Rajvardhan</h1>
              <div className="Welcomebox">
                <p>Your students are doing great! 60% students have completed the test.</p>
              </div>
            </div>
            <div className="submitted-tests">
              <h2>Submitted Tests</h2>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Select your class:</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  value={selectedValue.class_}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Choose...</option>
                  {optionsList.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {isLoading ? (
                <p>Loading students...</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date of Submission</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.name}>
                        <td><a href="/studentprofile">{student.name}</a></td>
                        <td>{student.dateOfSubmission}</td>
                        {typeof student.CMarks === 'object' && typeof student.DMarks === 'object' && Object.keys(student?.CMarks)?.length === 3 && Object.keys(student?.DMarks)?.length === 3 ? (
                          <td>Completed</td>
                        ) : (
                          <td>Pending</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
        {category && <Category />}
        {inbox && <Inbox />}
        {currentQuiz && <Makequiz />}
        {dynamic && <MakeDynamic />}
        {options && <OptionsComponent />} {/* Render OptionsComponent */}
        {blank && <Blank />}
        {/* {Calendar && <Calendar/>} */}

      </div>
    </div>
  );
}

export default Main;
