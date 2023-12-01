import React, { useState } from 'react'
import { Socialdata1 } from './Socialdata1';
import QuizResult from '../QuizResult1';
import  '../Quiz1.css';
import {postcurrentTestR} from '../../../../../../service/quizapi'
function Social1() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< Socialdata1.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
            let email = localStorage.getItem("email")
            const cResult = {social: score}
            postcurrentTestR(email , cResult);
        }
    }
    const updateScore=()=>{
        if(clickedOption===Socialdata1[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">Social1 APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={Socialdata1.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{Socialdata1[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {Socialdata1[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        style={{ variant: "contained"}}
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Social1;