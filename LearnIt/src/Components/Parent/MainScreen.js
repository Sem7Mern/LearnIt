// MainScreen.jsx
import React, { useState } from 'react';
import './mainScreen.css';
import '../Teacher/Blank.jsx';
import './Attendence.js';
import './Feedback.js';
import './Chatbot.jsx';

function MainScreen() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="app-container">
            {/* Hamburger menu */}
            <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {/* Sidebar */}
            <div className={`sidebar ${showMenu ? 'show' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-header-text">
                      LEARNIT
                    </div>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li>
                            <a href="/blank">Student profile</a>
                        </li>
                        <li>
                            <a href="/Chatbot">Chat</a>
                        </li>
                        <li>
                            <a href="/Performance">Performance </a>
                        </li>
                        <li>
                            <a href="/Attendence">Attendance</a>
                        </li>
                        <li>
                            <a href="/Feedback">Feedback</a>
                        </li>  
                        <li>
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Main content */}
            <div className="main-content">
                {/* Your main content goes here */}
            </div>
        </div>
    );
}

export default MainScreen;
