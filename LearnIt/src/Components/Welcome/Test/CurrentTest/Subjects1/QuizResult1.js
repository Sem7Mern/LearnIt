import React, { useEffect, useRef, useState } from "react";
import {  useParams } from 'react-router-dom';
import Performance from "../../../../Performance/Performance";

import { useNavigate } from 'react-router-dom';
function QuizResult1(props) {






  const [Cmarks, setCmarks] = useState({"Science":0});
 const [performance, setPerformance] = useState(true);
 const navigate = useNavigate();
 const showPerformance = () => {
  const currentPath = window.location.pathname;
  console.log(currentPath);
    if (currentPath == "/Science1") {
      localStorage.setItem("Science",props.score)
     
    } else if (currentPath == "/Math1") {
      localStorage.setItem("Maths",props.score)
    } else if (currentPath == "/Social1") {
      localStorage.setItem("Social",props.score)
    }
navigate("/performance")
  }

  // return (
    // <>
    //   {performance ? (
    //     <>
    //     <div className='show-score'>
    //       Your Score: {props.score}<br />
    //       Total Score: {props.totalScore}
    //     </div>
    //   <button id="next-button" onClick={showPerformance}>Show Performance</button></>
    //       ) : (<Performance cMarks = {Cmarks}/>
    //   )}
    // </>


  // performance ?(<> <div className='show-score'>
  //       Your Score: {props.score}<br />
  //         Total Score: {props.totalScore}
  //      </div>
  //      <button id="next-button" onClick={showPerformance}>Show Performance</button></>):(<div  className="pfc"><Performance cMarks = {Cmarks}/></div>)
   
  // );


    return (<> <div className='show-score'>
        Your Score: {props.score}<br />
           Total Score: {props.totalScore}
         </div>
        <button id="next-button" onClick={showPerformance}>Show Performance</button></>);
    
  
 
}

export default QuizResult1;
