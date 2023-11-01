import React from 'react'


import './Navbar.css'
import {Link,useLocation,useNavigate} from 'react-router-dom'
function Navbar() {
  return (
    <div className="n-wrapper">
        
        <div className="n-left">
          <div className='logo'></div>
            <div className="n-name">LearnIt</div>
            {/* for toggle component usecontext hook is used which helps to change the state of darkmode and change buttom position*/}
           
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                  <Link  to='/home' >
                    <li>Home</li>
                    </Link>
                  <Link  to='Student' >
                    <li>Student Login</li>
                    </Link>
                  <Link to='/Teacher' >
                    <li>Teacher Login</li>
                    </Link>
                  <Link  to='/Parent' >
                    <li>Parent Login</li>
                    </Link>
                 
                  
                </ul>
            </div>
            <Link  to='Contact' >


          </Link>
        </div>


    </div>
  )
}

export default Navbar