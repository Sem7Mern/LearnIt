import React, { useState } from 'react';
import { Sciencedata2 } from './Sciencedata2';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';

function Science2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Sciencedata2.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clickedOption === Sciencedata2[currentQuestion].answer) {
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
        <div>
            <p className="heading-txt">Science1 APP</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={Sciencedata2.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{Sciencedata2[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {Sciencedata2[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        style={{
                                            variant: 'contained',
                                            backgroundColor: clickedOption === i + 1 ? '#007bff' : '#ffffff',
                                            color: clickedOption === i + 1 ? '#fff' : '#000000',
                                            border: clickedOption === i + 1 ? '1px solid #007bff' : '1px solid #ccc',
                                        }}
                                        className={`option-btn ${clickedOption === i + 1 ? 'checked' : null
                                            }`}
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
    );
}

export default Science2;
