import React, { useState, useEffect } from 'react';
import './Welcome.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getstudentdata } from "../../service/quizapi";

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setemail] = useState(localStorage.getItem('email'))
  const [cMark, setcMark] = useState(0);
  const [marks, setmarks] = useState(0); const [Pmarks, setPmarks] = useState(0);
  const [subject, setsubject] = useState({});
  const [cMarks, setcMarks] = useState([]);
  const [Amarks, setAmarks] = useState([]);
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '8th grade',
    School: "DYP Edcucation society",
    AverageMarks: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("email");
        const data = await getstudentdata(email);

        console.log(data[0])
        setAmarks(data[0])
        // Assuming these state-setting functions are defined in your component
        setPmarks(data[0]);
        setsubject(data[1]);

        if (localStorage.getItem("Science") >= 0) {
          let m = parseInt(localStorage.getItem("Science"));
          setcMark(m);
          setcMarks({ "Science": m });
        } else if (localStorage.getItem("Maths") >= 0) {
          let m = parseInt(localStorage.getItem("Maths"));
          setcMark(m + cMark);
          setcMarks({ "Maths": cMark });
        } else if (localStorage.getItem("Social") >= 0) {
          let m = parseInt(localStorage.getItem("Social"));
          setcMark(m + cMark);
          setcMarks({ "Social": cMark });
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  function viewPerformance() {
    navigate('/performance');
  }

  function GiveTest() {
    navigate('/instructions');
  }
  function VideoPage() {
    navigate('/Subjects_Content');
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
          <p style={{ fontSize: '20px', color: "black" }}>School Name: {studentInfo.School}</p>
          <p style={{ fontSize: '20px', color: "black" }}>Class: {studentInfo.class}</p>
          <p style={{ fontSize: '20px', color: "black" }}>Percentage: {Amarks}</p>
        </div>
        <div className='right' style={{ flex: '70%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <button type="button" onClick={viewPerformance} className="btn btn-success" style={{ marginTop: '10px', marginBottom: "30px", marginRight: '180px' }}>Performance</button>
          <button type="button" onClick={GiveTest} className="btn btn-success" style={{ marginTop: '10px', marginBottom: "30px", marginRight: '180px' }}>Give Test</button>
          <button type="button" onClick={VideoPage} className="btn btn-success" style={{ marginTop: '10px', marginBottom: "30px", marginRight: '180px' }}>Content</button>

          {/* <button type="button" className="btn btn-success" style={{ marginTop: '10px', marginRight: '180px' }}>Content</button> */}
        </div>
      </div >
    </>
  );
}

export default Welcome;

