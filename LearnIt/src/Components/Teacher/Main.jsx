import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./alkesh.css";
import { type } from "@testing-library/user-event/dist/type";
import Category from './Category'
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

  const options = [
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
      
        break;
      case "inbox":
       
        setinbox(true);
      
      case "category":
      
        setcategory(true);
      
        break;
      case "currentQuiz":
      
        setcurrentQuiz(true);
      
        break;
      case "dynamic":
   
        setdynamic(true);
      
        break;
      case "google":
  
        setgoogle(true);
        break;
      case "blank":
     
        setblank(true);
        break;
      default:
        // default case, do nothing
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
      {/* Navigation */}
      <div className={`left-nav ${showMenu ? 'show' : ''}`}>
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <button onClick={() => { setsome("home") }}>
              Home
            </button>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("inbox") }}>Inbox
            </button>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("Category ") }}>Category
            </button>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("Make Quiz") }}>Make Quiz
            </button>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("Make  dynamic Quiz") }}>Make  dynamic Quiz
            </button>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("Make google form ") }}>Make google form 
            </button>
          </li>

          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("blank ") }}>blank 
            </button>
          </li>

       

          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("Logout ") }}>Logout
            </button>
          </li>
          {/* Add other menu items */}
        </ul>
      </div>
      {/* Main content */}
      <div style={{ position: "relative", top: "10px", height: "625px", overflow: "auto", width: "100%" }}>
        {home ? <div>
          <div className="main-content">


            <div className="welcome-msg">
              <h1>Good Morning, Rajvardhan</h1>
              {/* Replace the image source with your actual image */}
              {/* <img
          src="https://i.imgur.com/9QJf3xv.png"
          alt="teacher and student"
        /> */}
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
                  <option value="" disabled>
                    Choose...
            </option>
                  {options.map((option) => (
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
                        <a href="/studentprofile"> <td>{student.name}</td></a>
                        <td>{student.dateOfSubmission}</td>
                        {(typeof student.CMarks === 'object' && typeof student.DMarks === 'object') ? Object.keys(student?.CMarks)?.length === 3 && Object.keys(student?.DMarks)?.length === 3 ? <td>Completed</td> : <td>Pending</td> : <td>Pending</td>}

                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="right-sidebar">
            <div className="calendar">
              <h2>December 2023</h2>
              <table>
                <thead>
                  <tr>
                    {daysOfWeek.map((day, index) => (
                      <th key={index}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace the following with logic to populate calendar dates */}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>


                  </tr>
                  {/* Continue adding rows for the remaining weeks */}
                </tbody>
              </table>
            </div>
            <div className="timeline">{/* ... (Timeline content) */}</div>
            <div className="timeline">
              <h2>Timeline</h2>
              <ul>
                <li>
                  <span>Solve real-world problems involving multi...</span>
                  <span>{/* Add your timeline content here */}</span>
                </li>
                {/* Additional timeline items */}
              </ul>
            </div>
          </div>
        </div> : null}


        {category ? <Category /> : null}
        {inbox ? <Inbox /> : null}
        {currentQuiz ? <Makequiz /> : null}
        {dynamic ? <MakeDynamic /> : null}
        {google ? <GoogleForm /> : null}
        {blank ? <Blank /> : null}
      </div>


    </div>
  );
}

export default Main;
