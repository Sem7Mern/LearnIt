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
        <h2 style={{ position: "absolute", top: "169px", fontSize: '25px', color: 'red', fontWeight: '900' }}>Current syllabus Test</h2>
        <h3 style={{ color: "green", fontWeight: '650', marginBottom: '20px' }}>Read below instructions carefully</h3>
        <div style={{ justifyContent: 'left', fontWeight: '500' }}>
          <ol className='instructions'>
            <li>Read all questions carefully before answering.</li>
            <li>Select your answers legibly from provided options.</li>
            <li>You can use pencil and paper for rough works</li>
            <li>Manage your time wisely</li>
            <li>Review your answers before submitting the exam</li>
          </ol>
        </div>
        <button onClick={GiveCurrent} className="btn btn-primary">start test </button>
      </div>
      <div className='tright'>
        <h2 style={{ position: "absolute", top: "169px", fontSize: '25px', color: 'red', fontWeight: '900' }}>New content test</h2>
        <h3 style={{ color: "green", fontWeight: '650', marginBottom: '20px' }}>Read below instructions carefully</h3>
        <div style={{ justifyContent: 'left', fontWeight: '500' }}>
          <ol className='instructions'>
            <li>Read all given content carefully before answering.</li>
            <li>Select your answers legibly from provided options.</li>
            <li>You can use pencil and paper for rough works</li>
            <li>Manage your time wisely</li>
            <li>Review your answers before submitting the exam</li>
          </ol>
        </div>
        <button onClick={GiveCurrent} className="btn btn-primary">start test</button>
      </div>
    </div>


  )
}

export default Test
