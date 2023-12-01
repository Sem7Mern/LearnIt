import React, { useState, useEffect } from 'react';
import './Welcome.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { email } } = location; // Extract email from the location state
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '8th grade',
    AverageMarks: "DYP Edcucation society",
  });

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await fetch(`/api/studentInfo?email=${email}`);
        const data = await response.json();

        console.log('Data received from the backend:', data); // Add this line for debugging

        setStudentInfo({
          name: data.name,
          class: data.class,
          AverageMarks: data.AverageMarks,
        });
      } catch (error) {
        console.error('Error fetching student information:', error);
      }
    };

    fetchStudentInfo();
  }, [email]);

  function viewPerformance() {
    navigate('/performance');
  }

  function GiveTest() {
    navigate('/instructions');
  }

  return (
    <>
      <div className='welcome' style={{ display: 'flex' }}>
        <div className='left' style={{ flex: '30%' }}>
          <h2 style={{ border: "5px solid blue" }}>Welcome to Your Profile Champ</h2>
          <div style={{ width: "150px", margin: "0 auto", textAlign: "center", marginTop: "20px" }}>
            <img
              src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
              alt="Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <h3 style={{ fontSize: '18px', marginTop: "10px", marginBottom: "30px" }}>Your Personal info</h3>
          <p style={{ fontSize: '20px', color: "black" }}>Email: {email}</p>
          <p style={{ fontSize: '20px', color: "black" }}>School Name: {studentInfo.AverageMarks}</p>
          <p style={{ fontSize: '20px', color: "black" }}>Class: {studentInfo.class}</p>
        </div>
        <div className='right' style={{ flex: '70%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <button type="button" onClick={viewPerformance} className="btn btn-success" style={{ marginTop: '10px', marginBottom: "30px", marginRight: '180px' }}>Performance</button>
          <button type="button" onClick={GiveTest} className="btn btn-success" style={{ marginTop: '10px', marginBottom: "30px", marginRight: '180px' }}>Give Test</button>
          <button type="button" className="btn btn-success" style={{ marginTop: '10px', marginRight: '180px' }}>Content</button>
        </div>
      </div >
    </>
  );
}

export default Welcome;
