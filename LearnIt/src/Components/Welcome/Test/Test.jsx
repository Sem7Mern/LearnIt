import React from 'react'
import "./Test.css"
import { useNavigate } from 'react-router-dom';
function Test() {
    const navigate = useNavigate();
    function GiveCurrent(params) {
        navigate('/subjects')
    }
  return (

       <div className="test">
      <div className='tleft'>
        <h2 style={{position:"absolute", top:"28px", color:"white"}}>Give current syllabus Test</h2>
        <button onClick={GiveCurrent} className="btn btn-primary">Give Test</button>
      </div>
      <div className='tright'>
        <h2 style={{position:"absolute", top:"28px"}}>Check Your Grasping Power</h2>
        <button onClick={GiveCurrent} className="btn btn-primary">Give Test</button>
      </div>
    </div>
   

  )
}

export default Test
