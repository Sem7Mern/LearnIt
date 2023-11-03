//this is my QuizApp.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
function QuizApp() {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        // Replace 'your-api-endpoint' with your actual API endpoint to fetch quiz data from MongoDB.
        axios.get('http://localhost:8000/Quiz')
            .then((response) => {
                setQuizData(response.data.quiz.questions);
            })
            .catch((error) => {
                console.error('Error fetching quiz data:', error);
            });
    }, []);

    return (
        <div className="quiz-app">
            <h1> Science Quiz</h1>
            {quizData.map((question, index) => (
                <Question key={index} question={question} />
            ))}
        </div>
    );
}

export default QuizApp;
