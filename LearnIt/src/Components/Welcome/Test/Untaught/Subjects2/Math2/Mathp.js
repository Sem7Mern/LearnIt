
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
            "Percentages are a fundamental concept in mathematics that helps us express fractions of a whole in a familiar way. The term 'percent' means 'per hundred,' and it allows us to compare and represent values out of 100. For example, if you score 80% on a test, it means you got 80 correct answers out of every 100 questions. Percentages are useful in various real-life situations, such as calculating discounts during a sale, determining the percentage of a budget spent, or analyzing data in statistics. Understanding percentages is essential in financial calculations, data interpretation, and many aspects of daily life."
          </p>
        </div>

        <Link to="/Math2">
          <button id="startQuizButton" style={buttonStyle}>Start Quiz</button>
        </Link>

      </div>
    </div>
  );
}

export default Socialp;