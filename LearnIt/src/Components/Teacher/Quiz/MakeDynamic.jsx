import React, { useState } from 'react';

const Makequiz = () => {
    const [questions, setQuestions] = useState([]);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correct_answer: '',
    });

    const handleInputChange = (index, value) => {
        setCurrentQuestion((prevQuestion) => {
            const newOptions = [...prevQuestion.options];
            newOptions[index] = value;
            return { ...prevQuestion, options: newOptions };
        });
    };

    const handleAddQuestion = () => {
        if (validateQuestion(currentQuestion)) {
            setQuestions((prevQuestions) => [...prevQuestions, { subject, ...currentQuestion }]);
            setCurrentQuestion({
                question: '',
                options: ['', '', '', ''],
                correct_answer: '',
            });
        } else {
            alert("Please add all required fields (Question, Options, Answer).");
        }
    };

    const validateQuestion = (question) => {
        return (
            question.question.trim() !== '' &&
            question.options.every((option) => option.trim() !== '') &&
            question.correct_answer.trim() !== ''
        );
    };

    const handlePostContent = () => {
        if (content.split(/\s+/).length >= 50) {
            setSubject((prevSubject) => prevSubject); // Retain the subject
            setContent(content);
        } else {
            alert("Please enter at least 50 words of content.");
        }
    };


    const postDynamicQuiz = async(credentials)=>{
        try {
    console.log("trying to make request");
            const response = await fetch(`http://localhost:8000/tests`, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                 
                },
                body: JSON.stringify(
    
                  { questions: credentials}
          
                  )
              });
              const averageMarks = await response.json();
         
              return averageMarks;
           
    
    
        } catch (error) {
            console.log("error while adduser",error.message);
        }
    }

    const handleCreateQuiz = async() => {
        // You can implement your logic here to handle the quiz creation
        console.log('Quiz created:', questions);
        let quiz = {quiztype:"currentQuiz",title:subject, content:content, questions:questions}
        await postDynamicQuiz(quiz)
setQuestions([])
setContent("");
setSubject("")
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            {/* Left Side */}
            <div className='left' style={{ width: '40%', background: 'skyblue', padding: '20px', marginTop: "60px", height: "800px" }}>
                <h2>Create Test</h2>
                <div style={{ width: "100%" }}>
        
               
                    <div>
                        <label style={{ fontSize: '16px' }}>Subject:</label>
                        <input
                            style={{ width: "500px" }}
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    {/* Post Content Section */}
                    <div style={{ marginTop: "20px" }}>
                        <label style={{ fontSize: '16px' }}>Content:</label>
                        <textarea
                            style={{ width: "500px", height: "100px" }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button style={{ marginTop: "10px" }} onClick={handlePostContent}>Post Content</button>
                    </div>
                    <div>
                        <label style={{ fontSize: '16px' }}>Question:</label>
                        <input
                            style={{ width: "500px" }}
                            type="text"
                            value={currentQuestion.question}
                            onChange={(e) =>
                                setCurrentQuestion((prevQuestion) => ({
                                    ...prevQuestion,
                                    question: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <label style={{ fontSize: '16px' }}>Options:</label>
                        {currentQuestion.options.map((option, index) => (
                            <div key={index}>
                                <input
                                    style={{ width: "400px", marginBottom: "20px" }}
                                    type="text"
                                    value={option}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <label style={{ fontSize: '16px' }}>Answer:</label>
                        <input
                            style={{ width: "400px", marginBottom: "20px" }}
                            type="text"
                            value={currentQuestion.correct_answer}
                            onChange={(e) =>
                                setCurrentQuestion((prevQuestion) => ({
                                    ...prevQuestion,
                                    correct_answer: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
                <button style={{ marginRight: "30px" }} onClick={handleAddQuestion}>Add Question</button>
                <button onClick={handleCreateQuiz}>Create Quiz</button>
            </div>

            {/* Right Side */}
            <div className="right" style={{ width: '60%', margin: '20px', padding: '20px', background: "grey", marginTop: "130px", height: "900px", textAlign: 'left' }}>
                <h2>Quiz Questions</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {content && (
                        <li style={{ marginBottom: '20px', paddingLeft: '0', borderBottom: '1px solid #ccc' }}>
                            <p>{content}</p>
                        </li>
                    )}
                    {questions.map((q, index) => (
                        <li key={index} style={{ marginBottom: '20px', paddingLeft: '0', borderBottom: '1px solid #ccc' }}>
                            {q.question}
                            <ol style={{ listStyleType: 'decimal', marginLeft: '20px', marginTop: '10px', paddingLeft: '0' }}>
                                {q.options.map((option, i) => (
                                    <li key={i}>{option}</li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Makequiz;
