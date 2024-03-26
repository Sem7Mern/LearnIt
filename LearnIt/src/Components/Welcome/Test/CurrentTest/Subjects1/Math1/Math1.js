//Math1
import React, { useState,useLayoutEffect } from 'react'
import Clock from '../../../Clock/Clock';
import { Mathdata1 } from './Mathdata1';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';
import fetchquiz from '../../../fetchquiz.js'
import { postcurrentTestR } from '../../../../../../service/quizapi'
function Math1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null)
    const [Mathdata1,setMathdata1]=useState([]);
    useLayoutEffect(() => {
    
        const fetchingquiz = async ()=>{
            console.log("fetching quiz");
            let test = await fetchquiz("maths1");
            setMathdata1(test.subjecttest["questions"]);
        
        }
        fetchingquiz();
        
        
            })
    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
      }
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Mathdata1.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
            let email = localStorage.getItem("email")
            const cResult = { maths: score }
            postcurrentTestR(email, cResult);
        }
    }
    const updateScore = () => {
        if (clickedOption == Mathdata1[currentQuestion].correct_answer) {
            console.log("scoreupdated");
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{display:'flex-center' }}>
            <p className="heading-txt">Math1 APP</p>
            <div className="container">
            {showResult || message === "Time is up!" ? (
                <QuizResult message = {message} score={score} totalScore={Mathdata1.length} tryAgain={resetAll}/>
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{Mathdata1[currentQuestion]?.question}</span>
                        </div>
                        <div className="option-container">
                            {Mathdata1[currentQuestion]?.options.map((option, i) => {
                                return (
                                    <button
                                        style={{ variant: "contained" }}
                                        // className="option-btn"
                                        className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                    </>)}
            </div>
        </div>
                          { /*!showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null*/} 
        </div>
    )
}

export default Math1;