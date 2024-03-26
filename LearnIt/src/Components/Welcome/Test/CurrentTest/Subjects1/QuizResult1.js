import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import Performance from "../../../../Performance/Performance";
import { postcurrentTestR } from '../../../../../service/quizapi'
import { useNavigate } from 'react-router-dom';
function QuizResult1(props) {






  const [Cmarks, setCmarks] = useState({ "Science": 0 });
  const [performance, setPerformance] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    let email = localStorage.getItem("email")
    const currentPath = window.location.pathname;
    console.log("post result");
    console.log(currentPath);
    if (currentPath == "/Science1") {
      postcurrentTestR(email, { science: props.score });

    } else if (currentPath == "/Maths1") {
      console.log("performing maths");
      postcurrentTestR(email, { maths: props.score });
    } else if (currentPath == "/Social1") {
      postcurrentTestR(email, { social: props.score });
    }
  }, [])

  const showPerformance = () => {

    navigate("/subjects")
  }




  return (<> <div className='show-score' style={{ width: "800px" }}>
    <div style={{ marginBottom: "10px" }}>Result</div>
    <div> {props.message}</div>
    <div> Your Score: {props.score}</div>
    <div style={{ marginBottom: "30px" }}>     Total Score: {props.totalScore}</div>
  </div>
    <button id="next-button" onClick={showPerformance} style={{ width: "250px" }}>Next Subject Test</button></>);



}

export default QuizResult1;

