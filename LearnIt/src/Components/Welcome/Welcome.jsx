import React from 'react'
import './Welcome.css'
import { useState, useEffect } from 'react'; // Add this line
import { useNavigate, useLocation } from 'react-router-dom';
import { getstudentdata } from "../../service/quizapi";
function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setemail] = useState(localStorage.getItem('email'))
  const [Amarks, setAmarks] = useState([]);
  const [ctest, setctest] = useState(false);

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
        console.log("newCtest:", newCtest);

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
  return (
    <>
      <div className='welcome-container' style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/profile-picture-background-t2h20vgsbbth5dxe.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className='welcome' style={{
          display: 'grid', gridTemplateColumns: '50% 50%',
        }}>
          <div className='left'>
            <div className='left-container' style={{ width: "500px", height: '620px', marginRight: "10px" }}>
              <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/profile-picture-background-t2h20vgsbbth5dxe.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginBottom: "30px" }}> <h2 style={{ color: "black" }}>Welcome to Your Profile Champ</h2></div>
              <div className='proimg'>
                <img
                  src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
                  alt="Logo"
                  style={{ width: '200px', height: 'auto', marginLeft: "120px" }}
                />
              </div>
              <div className='this'>
                <h4 style={{ color: "green", marginBottom: '30px' }}>Your Personal info</h4>
                <p style={{ color: "black", marginBottom: "20px", fontSize: "20px" }}>Email: {email}</p>
                <p style={{ color: "black", marginBottom: "20px", fontSize: "20px" }}>School Name: {studentInfo.School}</p>
                <p style={{ color: "black", marginBottom: "20px", fontSize: "20px" }}>Class: {studentInfo.class}</p>
                <p style={{ color: "black", marginBottom: "20px", fontSize: "20px" }}>Percentage: {Amarks}</p>
              </div>
            </div>
          </div>
          <div className='right' style={{ marginLeft: '10px' }}>

            <div className='right-upper' style={{ width: "550px", height: "300px" }}>
              <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/profile-picture-background-t2h20vgsbbth5dxe.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginBottom: "30px", height: "40px" }}> <h4 style={{ color: "black", marginTop: '10px' }}>Test Status</h4></div>
              {ctest !== null ? (
                ctest ? (
                  <div style={{ marginTop: "80px" }}>
                    <h5 style={{ color: "green", marginBottom: "20px" }}>
                      You have successfully completed your first test.
                    </h5>
                    <p style={{ color: "red" }}>Current Test Status: true</p>
                  </div>
                ) : (
                  <div style={{ marginTop: "80px" }}>
                    <h5 style={{ color: "green" }}>
                      You have to give your all tests.
                    </h5>

                    <p style={{ color: "red" }}>Dynamic Test Status: false</p>

                    <button type="button" onClick={GiveTest} className="btn btn-success">Give Test</button>
                  </div>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className='right-lower' style={{ width: "550px", height: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/profile-picture-background-t2h20vgsbbth5dxe.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: "40px" }}>
                <h4 style={{ color: 'black', width: "500px" }}>Select Your Tasks</h4>
              </div>
              <button type="button" onClick={viewPerformance} className="btn btn-light" style={{ marginTop: "20px", marginBottom: "20px", color: 'white', border: '1px solid #ccc' }}>Performance</button>
              <button type="button" onClick={GiveTest} className="btn btn-light" style={{ marginBottom: "20px", color: 'white', border: '1px solid #ccc' }}>Give Test</button>
              <button type="button" onClick={Content} className="btn btn-light" style={{ marginBottom: "20px", color: 'white', border: '1px solid #ccc' }}>Content</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome