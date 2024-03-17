import React, { useEffect, useLayoutEffect, useState } from 'react'

import QuizResult from '../QuizResult1';
import  '../Quiz1.css';
import {postcurrentTestR} from '../../../../../../service/quizapi'
import Clock from '../../../Clock/Clock';
import fetchquiz from '../../../fetchquiz.js'
function Social1() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [Socialdata1,setSocialdata1]=useState([]);
    const [message, setmessage] = useState(null)
    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
      }
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


    useLayoutEffect(() => {
    
const fetchingquiz = async ()=>{
    console.log("fetching quiz");
    let test = await fetchquiz("social1");
setSocialdata1(test.subjecttest["questions"]);

}
fetchingquiz();


    })
    useEffect(() => {
    console.log(Socialdata1);
    }, [Socialdata1])
    
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
    <div>
        <p className="heading-txt">Social1 APP</p>
        <div className="container">
        {showResult || message === "Time is up!" ? (
                <QuizResult message = {message} score={score} totalScore={Socialdata1.length} tryAgain={resetAll}/>
            ): Socialdata1?(

               
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{Socialdata1[currentQuestion]?.question}</span>
            </div>
            <div className="option-container">
                {Socialdata1[currentQuestion]?.options.map((option,i)=>{
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
            </>):null
            
            }
        </div>
    </div>
    <Clock  onChildDataChange={handleChildDataChange}/>

    </div>
  )
}

export default Social1;