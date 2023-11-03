import React from 'react';
import './home.css'
const HomePage = () => {
  


    const contentStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    };



    return (
        <div className='homediv' >
            <header >
                <h1>LearnIt</h1>
                <p>"Empowering slow learners with personalized, effective, and supportive learning solutions to unlock their full potential."</p>
            </header>

        </div>
    );
}

export default HomePage;
