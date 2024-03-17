import React, { useState,useLayoutEffect } from 'react';
import { Mathdata2 } from './Mathdata2';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';
import Clock from '../../../Clock/Clock';
import fetchquiz from '../../../fetchquiz';

function Math2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [Mathdata2,setMathdata2]=useState([]);
    const [message, setmessage] = useState(null)
    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
      }
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Mathdata2.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    };


    useLayoutEffect(() => {
    
        const fetchingquiz = async ()=>{
            console.log("fetching quiz");
            let test = await fetchquiz("maths2");
            console.log(test);
            setMathdata2(test?.subjecttest["questions"]);
        
        }
        fetchingquiz();
        
        
            })
    const updateScore = () => {
        console.log(Mathdata2[currentQuestion]?.correct_answer);
        if (clickedOption === Mathdata2[currentQuestion]?.correct_answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    };

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div>
            <p className="heading-txt">Math1 APP</p>
            <div className="container">
            {showResult || message === "Time is up!" ? (
                <QuizResult message = {message} score={score} totalScore={Mathdata2.length} tryAgain={resetAll}/>
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{Mathdata2[currentQuestion]?.question}</span>
                        </div>
                        <div className="option-container">
                            {Mathdata2[currentQuestion]?.options.map((option, i) => {
                                return (
                                    <button
                                        style={{
                                            variant: 'contained',
                                            backgroundColor: clickedOption === i + 1 ? '#007bff' : '#ffffff',
                                            color: clickedOption === i + 1 ? '#fff' : '#000000',
                                            border: clickedOption === i + 1 ? '1px solid #007bff' : '1px solid #ccc',
                                        }}
                                        className="option-btn"
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
        {!showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null} 

        </div>
    );
}

export default Math2;
