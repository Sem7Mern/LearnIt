import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom';
function Welcome() {
    const navigate = useNavigate();
  function viewPerformance(){
    navigate('/performance')
  }
    return (
    <>
    <div className='welcome'>
        <div className='left'>

    <button type="button" onClick= { viewPerformance} class="btn btn-success">View Performance</button>
        </div>
<div className='right'>
<button type="button" class="btn btn-success" style={{margin: "10px"}}>Profile</button>
<button type="button" class="btn btn-success" style={{margin: "10px"}}>Give Test</button>
<button type="button" class="btn btn-success" style={{margin: "10px"}}>Provided Material</button>
</div>
    </div>
    </>
  )
}

export default Welcome