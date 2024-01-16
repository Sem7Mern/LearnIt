//Makequiz.jsx
import React, { useState } from 'react';

// Basic styling
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    leftPanel: {
        flex: 1,
        marginRight: '20px',
    },
    rightPanel: {
        flex: 1,
    },
    questionList: {
        listStyleType: 'none',
        padding: 0,
    },
};

// Main App component
const Makequiz = () => {
    // State for managing quiz questions
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correctOption: 0,
        timebound: 0,
    });

    // Handle adding a new question
    const addQuestion = () => {
        setQuestions([...questions, { ...currentQuestion }]);
        setCurrentQuestion({
            question: '',
            options: ['', '', '', ''],
            correctOption: 0,
            timebound: 0,
        });
    };

    // Handle publishing the quiz
    const publishQuiz = () => {
        //navigate('/takequiz');
        console.log('Quiz published:', questions);
    };

    return (
        <div style={styles.container}>
            {/* Left Panel - Add Questions */}
            <div style={styles.leftPanel}>
                <h2>Add Questions</h2>
                <div>
                    <label>Question:</label>
                    <input
                        type="text"
                        value={currentQuestion.question}
                        onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                    />
                </div>
                <div>
                    <label>Options:</label>
                    {currentQuestion.options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            value={option}
                            onChange={(e) => {
                                const newOptions = [...currentQuestion.options];
                                newOptions[index] = e.target.value;
                                setCurrentQuestion({ ...currentQuestion, options: newOptions });
                            }}
                        />
                    ))}
                </div>
                <div>
                    <label>Correct Option:</label>
                    <select
                        value={currentQuestion.correctOption}
                        onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctOption: parseInt(e.target.value, 10) })}
                    >
                        {currentQuestion.options.map((option, index) => (
                            <option key={index} value={index}>
                                {`Option ${index + 1}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Timebound (seconds):</label>
                    <input
                        type="number"
                        value={currentQuestion.timebound}
                        onChange={(e) => setCurrentQuestion({ ...currentQuestion, timebound: parseInt(e.target.value, 10) })}
                    />
                </div>
                <button onClick={addQuestion}>Add Question</button>
            </div>

            {/* Right Panel - Show Questions and Publish Button */}
            <div style={styles.rightPanel}>
                <h2>Question List</h2>
                <ul style={styles.questionList}>
                    {questions.map((q, index) => (
                        <li key={index}>
                            {`${index + 1}. ${q.question} - Time: ${q.timebound}s`}
                        </li>
                    ))}
                </ul>
                <button onClick={publishQuiz}>Publish Quiz</button>
            </div>
        </div>
    );
};

export default Makequiz;
