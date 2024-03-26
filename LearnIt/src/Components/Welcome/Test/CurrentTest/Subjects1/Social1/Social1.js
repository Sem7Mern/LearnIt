
//Math1
import React, { useState, useLayoutEffect } from 'react';
import Clock from '../../../Clock/Clock';
//import { Mathdata1 } from './Mathdata1';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';
import fetchquiz from '../../../fetchquiz.js';
import { postcurrentTestR } from '../../../../../../service/quizapi';

function Social1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [Socialdata1, setSocialdata1] = useState([]);

    useLayoutEffect(() => {
        const fetchingquiz = async () => {
            console.log("fetching quiz");
            let test = await fetchquiz("social1");
            const socialData = test.subjecttest["questions"];
            setSocialdata1(socialData);
            setSelectedOptions(new Array(socialData.length).fill(0));
        }
        fetchingquiz();
    }, []);

    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
    }

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Socialdata1.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(selectedOptions[currentQuestion + 1]);
        } else {
            setShowResult(true);
            let email = localStorage.getItem("email");
            const cResult = { science: score };
            postcurrentTestR(email, cResult);
        }
    }

    const updateScore = () => {
        if (clickedOption == Socialdata1[currentQuestion].correct_answer) {
            console.log("score updated");
            setScore(score + 1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    const handleOptionClick = (optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentQuestion] = optionIndex + 1;
        setSelectedOptions(newSelectedOptions);
        setClickedOption(optionIndex + 1);
    }

    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setClickedOption(selectedOptions[currentQuestion - 1]);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex-center', margin: '0 50px' }}>
                <p className="heading-txt">Science1 APP</p>
                <div className="container" style={{ width: '1100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span id="question-count">{currentQuestion + 1}/{Socialdata1.length}</span>
                    </div>
                    {showResult || message === "Time is up!" ? (
                        <QuizResult
                            message={message}
                            score={score}
                            totalScore={Socialdata1.length}
                            tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className="question">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{Socialdata1[currentQuestion]?.question}</span>
                            </div>
                            <div className="option-container">
                                {Socialdata1[currentQuestion]?.options.map((option, i) => {
                                    return (
                                        <button

                                            className={`option-btn ${clickedOption == i + 1 ? "checked" : null}`}
                                            key={i}
                                            onClick={() => handleOptionClick(i)}
                                            style={{ background: clickedOption == i + 1 ? 'lightgreen' : 'grey', variant: "contained" }}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button style={{ marginRight: "200px", background: "lightgreen", color: 'black', width: "100px" }} onClick={goToPreviousQuestion}>←</button>
                                <input type="button" value="→" id="next-button" onClick={changeQuestion} style={{ marginLeft: "200px", background: "lightgreen", color: "black" }} />
                            </div>
                        </>)}
                </div>
            </div>
            { !showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null}
        </div>
    )
}

export default Social1;






