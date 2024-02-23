import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subjects1.css';

function Subjects() {
  const [subjects, setSubjects] = useState(["Science", 'Maths', "Social"]);
  const [Usubjects, setUSubjects] = useState([]);
  const [Fsubjects, setFSubjects] = useState([]);
  const [dynamic, setDynamic] = useState(true);
  const navigate = useNavigate();

 
  useEffect(() => {
    let email = localStorage.getItem("email");
    // Fetch subjects from your server
    const headers = new Headers({
      'Content-Type': 'application/json', // Example header, replace with your headers
    
    });
    
    // Fetch options object with headers
    const requestOptions = {
      method: 'POST', // or 'POST', 'PUT', etc.
      headers: headers,
      body: JSON.stringify({email: email}),
      // Additional options can be added, such as body for POST requests
    };
    

    
    fetch('http://localhost:8000/subjects',requestOptions)
    .then((response) => response.json())
    .then((data) => 
    {
    
      let arr = [];
      arr =   Object.keys(data.subjects) 
      console.log("unactive subjects are in frontend");
      setUSubjects(arr)
      console.log(data.subjects);
      console.log(Usubjects);
setFSubjects(subjects.filter(element => !Usubjects.includes(element.toLocaleLowerCase())));

console.log("fsubjects length is" + Fsubjects);
if (Fsubjects.length == 0) {
  console.log("length is zero");
  setDynamic(false)
}
      }
          )
      .catch((error) => console.error('Error fetching subjects:', error));



     
  });

  const giveTest = (subject) => {
    navigate(`/${subject.replace(/\s/g, "")}1`);
  };

  const navigatePerformance = () => {
    navigate('/performance');
  };

  const navigateProfile = () => {
    navigate('/welcome');
  };

  return (
    <> 
     {Fsubjects.length !== 0 ?
            <>
      <section className="main">
        <div className="main-top">
        
              <h1>Current Test Subjects</h1>
              </div>
              <section className="main-subjects">
                {subjects.map((subject, index) => (
                  !Usubjects.includes(subject.toLocaleLowerCase()) ?
                    <div className="card" key={index}>
                      <h3>{subject}</h3>
                      <p>{`Strengthening ${subject} skills.`}</p>
                      <button onClick={() => giveTest(subject)}>Get Started</button>
                    </div>
                    :
                    <div className="card" key={index}>
                      <h3>{subject}</h3>
                      <p>Strengthening {subject} skills.</p>
                      <button className="btn m-2 btn-primary disabled" onClick={() => giveTest("Maths")}>Get Started</button>
                    </div>
                ))}
              </section></section>
            </>
            :
            <>
              <div className='display-4'>Congratulations! You have given all your current tests.</div>
              <div>
                <button className='btn m-2 btn-primary' onClick={navigateProfile}>GO TO PROFILE </button>
                <button className='btn m-2 btn-primary' onClick={navigatePerformance}>GO TO PERFORMANCE </button>
              </div>
            </>
          }
     
    </>
  );
}

export default Subjects;
