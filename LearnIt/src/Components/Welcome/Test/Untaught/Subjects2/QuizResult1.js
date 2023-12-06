import React from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
function QuizResult1(props) {
  const navigate = useNavigate();
  const checkPerformance = ()=>{
    navigate('/performance')
  }
=======

function QuizResult1(props) {
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
<<<<<<< HEAD
    <button id="next-button" onClick={checkPerformance}>Check Performance</button>
=======
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
    </>
  )
}

export default QuizResult1;