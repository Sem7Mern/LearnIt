import React from 'react'
import { Link } from 'react-router-dom';


export default function MainScreen() {
  return (
    <div>
      {/* <PerformancePage/> */}
      File created succesfully .........!

      <div>
        

          <Link to='/performance' >
            <div className='btn btn-primary' >Performance</div>

          </Link>

          <Link to='/Attendence'>
            <div className='btn btn-primary' >Attendence</div>
          </Link>

          <Link to='/Feedback'>
            <div className='btn btn-primary'>Feedback</div>

          </Link>
        

        


      </div>

    </div>
  )
}
