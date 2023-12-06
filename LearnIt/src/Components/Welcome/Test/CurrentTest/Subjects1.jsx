//this is my Subjects.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Subjects() {
  const [subjects, setSubjects] = useState(["Science", "Maths", "Social Science", "Hindi", "Engish"]);

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch subjects from your server
    fetch('https://your-server-api.com/subjects')
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);
  const giveTest = (subject) => {
    navigate(`/${subject}quiz`)
  }
  return (
    <>
      <div>
        <h2>Subjects</h2>
        <div className="button-container border  ">
          {subjects.map((subject, index) => (
            <button onClick={() => { giveTest(subject) }} className="btn m-2 btn-primary " key={index}>{subject}</button>
          ))}
        </div>
      </div>

    </>
  )
}

export default Subjects