import React from 'react'
import { useNavigate } from 'react-router-dom'
function QuizResult1(props) {
  const navigate = useNavigate();
  const checkPerformance = ()=>{
    navigate('/performance')
  }
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={checkPerformance}>Check Performance</button>
    </>
  )
}

export default QuizResult1;