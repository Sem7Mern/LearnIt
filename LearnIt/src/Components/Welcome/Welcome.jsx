import React from 'react';
import './Welcome.css'; // Assuming you have your styles defined in Welcome.css
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getstudentdata } from '../../service/quizapi';

function Welcome() {
  const navigate = useNavigate();
  const [email, setemail] = useState(localStorage.getItem('email'));
  const [Amarks, setAmarks] = useState([]);
  const [ctest, setctest] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '8th grade',
    School: 'DYP Education society',
    AverageMarks: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('email');
        const data = await getstudentdata(email);

        console.log(data);

        setAmarks(data[0]);
        // Assuming data[4] is an object with properties maths, science, and social
        const hasMaths = data[4]?.maths !== null;
        const hasScience = data[4]?.science !== null;
        const hasSocial = data[4]?.social !== null;
        console.log(data[4].maths);
        console.log(data[4].science);
        console.log(data[4].social);
        console.log(hasMaths);
        console.log(hasScience);
        console.log(hasSocial);

        // Check if all three subjects have data
        const newCtest = hasMaths && hasScience && hasSocial;
        console.log('newCtest:', newCtest);

        setctest(newCtest);
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

  function Content() {
    navigate('/Subjects_Content');
  }
  function Chatbot() {
    navigate('/chatbot');
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`wrapper ${sidebarOpen ? 'open' : ''}`}>
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}
          style={{ width: "250px" }}>
          <nav id="sidebar">
          

            <ul className="list-unstyled components">
              <li>
                <button type="button" className="btn btn-light btn-block" onClick={viewPerformance}>
                  Performance
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-light btn-block" onClick={GiveTest}>
                  Give Test
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-light btn-block" onClick={Content}>
                  Content
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-light btn-block" onClick={Chatbot}>
                  Chatbot
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* Page Content */}
        <div className="right">
          <div
            className="this-container"
            style={{
              width: "1100px",
              height: '900px',
              marginRight: '10px',
              marginLeft: '400px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div>
              <h2 style={{ color: 'skyblue', marginTop: "200px", marginRight: '700px', fontSize: "70px" }}>Profile</h2>
              <h6 style={{ color: 'grey', marginleft: "10px", marginRight: '630px' }}>check your profile information here</h6>
            </div>
            <div className="proimg">
              <img
                src={require('./profile1.jpeg')}
                alt="Logo"
                style={{ width: '350px', height: 'auto', marginLeft: '600px' }}
              />
            </div>

            <div className="proinfo" style={{ marginLeft: '10px', marginRight: '400px', marginTop: '-500px', textAlign: 'left' }}>
              <div style={{ width: "580px" }}>
                <h2 style={{ color: 'red', marginBottom: '30px', marginRight: '300px', fontWeight: '150px' }}>About us:</h2>
                <div style={{ marginLeft: "100px" }}>
                  <p style={{ color: 'grey', marginBottom: '30px', fontSize: '15px' }}>
                    "Empower learners with our specialized platform, identifying and supporting individuals with diverse learning paces. Our website offers personalized resources and tools to nurture and enhance the educational journey of slow learners, fostering a supportive and inclusive learning environment."</p>
                  <h5 style={{ color: 'red', marginBottom: '10px', marginRight: '300px', fontWeight: '150px' }}>About you:</h5>
                  <p style={{ color: 'black', marginBottom: '5px', fontSize: '15px' }}>I am a sincere and honest student</p>
                  <p style={{ color: 'black', marginBottom: '5px', fontSize: '15px' }}> from {studentInfo.School}.</p>
                  <p style={{ color: 'black', marginBottom: '20px', fontSize: '15px' }}>Currently studying in class {studentInfo.class}.</p>
                </div>
                <p style={{ color: 'red', marginBottom: '5px', fontSize: '15px', marginLeft: "100px" }}>Below is my Email Id:</p>
                <p style={{ color: 'black', marginBottom: '5px', fontSize: '15px', marginLeft: "100px" }}>Email: {email}</p>
                <p style={{ color: 'black', marginBottom: '5px', fontSize: '15px', marginLeft: "100px" }}>Your percentage:</p>
                <p style={{ color: 'black', marginBottom: '5px', fontSize: '15px', marginLeft: "100px" }}>Percentage: {Amarks}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;


