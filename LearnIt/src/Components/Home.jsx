import React from 'react';
<<<<<<< HEAD
import './home.css'
const HomePage = () => {
  
=======

const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        height: '100%',

        background: `url('https://wallpaperaccess.com/full/1196474.jpg') no-repeat center center fixed`,
        backgroundSize: '100% 100%',
    };

>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019


    const contentStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    };



    return (
<<<<<<< HEAD
        <div className='homediv' >
            <header >
=======
        <div style={containerStyle}>
            <header>
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
                <h1>LearnIt</h1>
                <p>"Empowering slow learners with personalized, effective, and supportive learning solutions to unlock their full potential."</p>
            </header>

        </div>
    );
}

export default HomePage;
