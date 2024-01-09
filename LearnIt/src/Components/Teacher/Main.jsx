import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Mainstyle.css'; // Make sure to import the same CSS file used in App.js
import { type } from '@testing-library/user-event/dist/type';

function Main() {
  const [students, setStudents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({class_:"8th"});
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    // Implement your API call here to fetch student data
    // Replace this with the actual fetch logic using libraries like axios or fetch API
    const fetchStudentData = async () => {
      try {
        // Replace 'your-api-endpoint-here' with your actual API endpoint
        console.log(selectedValue);
        const response = await fetch('http://localhost:8000/slist',{method:"POST",  headers: {
          "Content-Type": "application/json",
         
        },body: JSON.stringify({class_: selectedValue.class_})});
        const data = await response.json();
        console.log(data);
        setStudents(data.students);
       console.log(Object.keys(data.students[0].CMarks).length);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setStudents([]);
        setIsLoading(false);
      }
    };

    fetchStudentData();
  }, [selectedValue]);



  // Options for the selection list
  const options = [
    { value: '8th', label: '8th' },
    { value: '9th', label: '9th' },
    { value: '10th', label: '10th' },
  ];

  // Event handler for when the selection changes
  const handleSelectChange = (e) => {
    setSelectedValue({class_: e.target.value});
  };

  return (
    <div className="App">
      <div className="left-nav">
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <span><Link to="/">Home</Link></span>
          </li>
          <li>
            <i className="fas fa-inbox"></i>
            <span><Link to="/inbox">Inbox</Link></span>
          </li>
          {/* <li>
            <i className="fas fa-calendar-alt"></i>
            <span><Link to="/calendar">cl</Link></span>
          </li> */}
          <li>
            <i className="fas fa-book"></i>
            <span><Link to="#">logout</Link></span>
          </li>
        </ul>
      </div>
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
                    <td>{student.name}</td>
                    <td>{student.dateOfSubmission}</td>
                    {(typeof student.CMarks === 'object' && typeof student.DMarks === 'object') ?  Object.keys(student?.CMarks)?.length === 3 && Object.keys(student?.DMarks)?.length === 3 ? <td>Completed</td>:<td>Pending</td> :<td>Pending</td>}
                
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="right-sidebar">
        <div className="calendar">
          <h2>December 2021</h2>
          <table>
            <thead>
              <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              {/* Calendar content here */}
            </tbody>
          </table>
        </div>
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
    </div>
  );
}

export default Main;