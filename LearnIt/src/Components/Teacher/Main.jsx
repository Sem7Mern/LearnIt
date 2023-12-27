// import React from 'react'
// import { Link } from 'react-router-dom'


// // import './Main.css';
// // import { BrowserRouter, Route, Routes } from "react-router-dom";




// export default function Main() {
//   return (
//     <div>
//       {/* File created successfully */}

//       {/*<---------------------------- Class Allotted section-----------------------> */}


//       {/* <Link to='/Class_alloted'> */}
//       {/* <div className='btn btn-primary' >Class Allotted</div>   </Link>
//             <Link to='/Classes'>
//             <div className='btn btn-primary' >Class Allotted</div>   </Link> */}

//       <Link to='/Performance'>
//         <div className='btn btn-primary' >Performance</div>   </Link>

//       {/* <Link to='/Subject_Selection'>
//             <div className='btn btn-primary' >Subject_Selection</div>   </Link> */}

//       <Link to='/Student_List'>
//         <div className='btn btn-primary' >Student_List</div>   </Link>






//     </div>
//   )
// }


// Main.js

import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import './Main.css'; // Import your CSS file

// Import your components for different pages
import Student_List from './Student_List';
import Performance from './../Performance/Performance';

export default function Main() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="main-container">
      {/* Left side - Navigation */}
      <div className="navigation-container">
       <button onClick={() => handleLinkClick('Student_List')} className="nav-button">
          Student List
        </button>
        <button onClick={() => handleLinkClick('Performance')} className="nav-button">
          Performance
        </button>
       
      </div>

      {/* Right side - Display Redirected Content */}
      <div className="content-container">
        {selectedLink === 'Performance' && <Performance />}
        {selectedLink === 'Student_List' && <Student_List />}
      </div>
    </div>
  );
}

