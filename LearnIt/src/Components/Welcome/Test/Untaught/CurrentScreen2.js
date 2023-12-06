//All subjects 

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function CurrentScreen2() {
  const [subjects, setSubjects] = useState(["Science", "Math", "Social"]);

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch subjects from your server
    fetch('https://your-server-api.com/CurrentScreen2')
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);
  const giveTest = (subject) => {
    navigate(`/${subject}p`)
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

export default CurrentScreen2;