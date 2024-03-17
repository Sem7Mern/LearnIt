import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Sciencedata1 } from './Sciencedata1';
import QuizResult from '../QuizResult1';
// import  '../Quiz1.css';
import {postcurrentTestR} from '../../../../../../service/quizapi'
import Clock from '../../../Clock/Clock';
import fetchquiz from '../../../fetchquiz.js'
function Science1() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [message, setmessage] = useState(null)
    const [Sciencedata1,setSciencedata1]=useState([]);




    useEffect(() => {
    
        const fetchingquiz = async ()=>{
            console.log("fetching quiz");
            let test = await fetchquiz("science1");
            setSciencedata1(test.subjecttest["questions"]);
        
        }
        fetchingquiz();
        
        
            })


            useEffect(() => {
                console.log(Sciencedata1);
                }, [Sciencedata1])
     function handleChildDataChange(newChildData) {
          setmessage(newChildData);
          console.log(newChildData);
        }
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< Sciencedata1.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
            let email = localStorage.getItem("email")
            const cResult = {science: score}
            postcurrentTestR(email , cResult);
        }
    }
    const updateScore=()=>{
        if(clickedOption===Sciencedata1[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
    <div style={{display:'flex-center' }}>
        <p className="heading-txt">Science1 APP</p>
        <div className="container">
            {showResult || message === "Time is up!" ? (
                <QuizResult message = {message} score={score} totalScore={Sciencedata1.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{Sciencedata1[currentQuestion]?.question}</span>
              
            </div>
            <div className="option-container">
                {Sciencedata1[currentQuestion]?.options.map((option,i)=>{
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
            </>)}
        </div>
      
    </div>
  {!showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null} 
  
    </div>
  )
}

export default Science1;