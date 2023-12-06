
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
            "Social science is a fascinating subject that helps us understand the world and our place in it. It encompasses various disciplines like history, geography, civics, and economics. In history, we explore the past, learn about ancient civilizations, and understand how events have shaped our present. Geography takes us on a journey around the globe, teaching us about countries, landscapes, and cultures. Civics helps us understand the principles of democracy, our rights, and responsibilities as citizens. Economics delves into the world of money, trade, and resources. Together, these subjects provide valuable insights into the complex and interconnected world we live in, preparing us to be informed and responsible global citizens."
          </p>
        </div>

        <Link to="/Social2">
          <button id="startQuizButton" style={buttonStyle}>Start Quiz</button>
        </Link>

      </div>
    </div>
  );
}

export default Socialp;

