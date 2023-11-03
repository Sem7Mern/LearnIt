//this is my Question.jsx
import React, { useState } from 'react';

function Question({ question }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (option) => {
        setSelectedAnswer(option);
    };

    return (
        <div className="question">
            <h3>{question.question}</h3>
            <ul>
                {question.options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleAnswerSelection(option)}
                        className={selectedAnswer === option ? 'selected' : ''}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            {selectedAnswer && (
                <p>
                    Your answer: <strong>{selectedAnswer}</strong>
                </p>
            )}
            <p>Correct answer: {question.correct_answer}</p>
        </div>
    );
}

export default Question;
