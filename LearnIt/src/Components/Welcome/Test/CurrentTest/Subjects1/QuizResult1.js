import React, { useEffect, useRef, useState } from "react";
import {  useParams } from 'react-router-dom';
import Performance from "../../../../Performance/Performance";
import {postcurrentTestR} from '../../../../../service/quizapi'
import { useNavigate } from 'react-router-dom';
function QuizResult1(props) {






  const [Cmarks, setCmarks] = useState({"Science":0});
 const [performance, setPerformance] = useState(true);
 const navigate = useNavigate();
 const showPerformance = () => {
  let email = localStorage.getItem("email")
  const currentPath = window.location.pathname;
  console.log(currentPath);
    if (currentPath == "/Science1") {
      postcurrentTestR(email , {science: props.score});
     
    } else if (currentPath == "/Maths1") {
      console.log("performing maths");
      postcurrentTestR(email , {maths: props.score});
    } else if (currentPath == "/Social1") {
      postcurrentTestR(email , {social: props.score});
    }
navigate("/subjects")
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
      <div>Result</div>
     <div> {props.message}</div>
     <div> Your Score: {props.score}</div>
     <div>     Total Score: {props.totalScore}</div>
         </div>
        <button id="next-button" onClick={showPerformance}>Next Subject Test</button></>);
    
  
 
}

export default QuizResult1;
