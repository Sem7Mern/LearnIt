import React, { useState,useLayoutEffect } from 'react';
import { Socialdata2 } from './Socialdata2';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';
import Clock from '../../../Clock/Clock';
import fetchquiz from '../../../fetchquiz.js'
function Social2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null)
    const [Socialdata2,setSocialdata2]=useState([]);
    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
      }
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Socialdata2.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clickedOption === Socialdata2[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    };
    useLayoutEffect(() => {
    
        const fetchingquiz = async ()=>{
            console.log("fetching quiz");
            let test = await fetchquiz("social1");
        setSocialdata2(test.subjecttest["questions"]);
        
        }
        fetchingquiz();
        
        
            })
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div>
            <p className="heading-txt">Social Test</p>
            <div className="container">
            {showResult || message === "Time is up!" ? (
                <QuizResult message = {message} score={score} totalScore={Socialdata2.length} tryAgain={resetAll}/>
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{Socialdata2[currentQuestion]?.question}</span>
                        </div>
                        <div className="option-container">
                            {Socialdata2[currentQuestion]?.options.map((option, i) => {
                                return (
                                    <button
                                        style={{
                                            variant: 'contained',
                                            backgroundColor: clickedOption === i + 1 ? '#007bff' : '#ffffff',
                                            color: clickedOption === i + 1 ? '#fff' : '#000000',
                                            border: clickedOption === i + 1 ? '1px solid #007bff' : '1px solid #ccc',
                                        }}
                                        className={`option-btn ${clickedOption == i + 1 ? 'checked' : null}`}
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

export default Social2;
