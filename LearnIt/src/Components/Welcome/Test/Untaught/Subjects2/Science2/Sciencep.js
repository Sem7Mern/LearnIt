

import React from 'react';
import { Link } from 'react-router-dom';

function Socialp() {
  const containerStyle = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px',
    display: 'inline-block',  // Set display to inline-block
    width: '700px',
    marginTop: "10px",
    backgroundColor: 'white',

  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '200px',
    marginLeft: "250px"

  };


  const pageStyle = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGsoYPMLs9wCwwRcPiFpYev3M1_8JFEGMeiY7EzwtSA&s')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (

    <div style={pageStyle}>
      <div >
        <h2 style={{ color: "red", marginTop: '50px', width: "500px", marginLeft: "120px" }}>Read below content carefully</h2>
        <div id="paragraph" style={containerStyle}>

          <p style={{ color: "black", fontSize: "20px" }}>
            "Science is an incredible journey of exploration and discovery. It helps us understand the world around us, from the smallest particles to the vastness of the universe. In 8th grade, you'll delve into various branches of science, such as physics, chemistry, biology, and earth science. Physics explores the fundamental laws governing motion and energy. Chemistry delves into the properties and interactions of matter. Biology reveals the wonders of life, from cells to ecosystems. Earth science unravels the mysteries of our planet's geology, climate, and more. Through experiments, observations, and critical thinking, you'll uncover the secrets of the natural world and develop a deeper appreciation for the beauty and complexity of science."
          </p>
        </div>

        <Link to="/Science2">
          <button id="startQuizButton" style={buttonStyle}>Start Quiz</button>
        </Link>

      </div>
    </div>
  );
}

export default Socialp;