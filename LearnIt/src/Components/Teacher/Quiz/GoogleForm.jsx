import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleForm = () => {
    const [quizLink, setQuizLink] = useState('');
    const navigate = useNavigate();
    function handlePostQuizLink(params) {
        navigate('/inbox');
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            {/* First Box */}
            <div style={{ background: "skyblue", width: '500px', height: '500px', border: '1px solid #ccc', padding: '20px', marginLeft: "120px", marginTop: "100px" }}>
                <h2 style={{ paddingTop: "50px" }}>Create Your Google Form</h2>
                <p style={{ paddingTop: "50px", paddingBottom: "30px" }}>Create your form on Google Forms and obtain the link for quiz.</p>
                <a
                    href="https://docs.google.com/forms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'white', background: 'blue', padding: '10px', borderRadius: '5px', display: 'block', textAlign: 'center', marginTop: '20px' }}
                >
                    Go to Google Forms
                </a>
            </div>

            {/* Second Box */}
            <div style={{ background: "skyblue", width: '500px', height: '500px', border: '1px solid #ccc', padding: '20px', marginRight: "80px", marginTop: "100px" }}>
                <h2 style={{ paddingTop: "50px" }}>Paste Your Quiz Link Here</h2>
                <p style={{ paddingTop: "50px", paddingBottom: "30px" }}>You Need to paste the quiz link with notice in notice section.click on below button and paste the quiz link with appropriate notice in notice section</p>

                <button
                    onClick={handlePostQuizLink}
                    style={{ background: 'blue', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Go to Notice Section
                </button>
            </div>
        </div>
    );
};

export default GoogleForm;
