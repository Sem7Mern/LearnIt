// Subjects_Content.js
import React from 'react';
import { Link } from 'react-router-dom';


const Subjects_Content = () => {
  const buttonStyle = {
    

 
    
    display: 'block',
    marginTop: '10px',
    padding: '15px', // Increased padding for better touch interaction
    fontSize: '18px', // Slightly larger font size
    cursor: 'pointer',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '8px', // Increased border radius for a softer look
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    transition: 'background-color 0.3s ease', // Smooth transition for background color change
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a box shadow to the container
    borderRadius: '10px', // Rounded corners for the container
   
  };

  return (
    <div className='all-screen'>
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px' }}>Subjects</h2>
      <p style={{ fontSize: '16px', color: '#555' }}>Choose a Subject Below:</p>

      {/* Buttons with redirect links */}
      <Link to="/MathsVideo">
        <button style={buttonStyle}>Maths</button>
      </Link>

      <Link to="/ScienceVideo">
        <button style={buttonStyle}>Science</button>
      </Link>

      <Link to="/SocialVideo">
        <button style={buttonStyle}>Social Science</button>
      </Link>
    </div>
    </div>
  );
};

export default Subjects_Content;
