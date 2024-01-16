// Inbox.js

import React, { useState } from 'react';

function Inbox() {
    const [userId, setUserId] = useState('');
    const [notice, setNotice] = useState('');
    const [notices, setNotices] = useState([]);

    const handlePostNotice = () => {
        if (userId.trim() !== '' && notice.trim() !== '') {
            setNotices([...notices, { userId, notice }]);
            setUserId('');
            setNotice('');
        }
    };

    const handleClearNotice = () => {
        setUserId('');
        setNotice('');
    };

    return (
        <div className='chat-container' style={{ display: 'flex', height: '100vh', backgroundColor: '#f4f4f4' }}>
            {/* Left Side */}
            <div className='left' style={{ width: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    border: "solid black 2px ", borderRadius: '20px', display: 'flex', width: '500px', height: '600px', padding: '20px', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: `url("https://cdn.wallpapersafari.com/18/84/kFg5GT.jpg")` // Wrap url in backticks and use template literals
                }}>
                    <div style={{ width: '80%', textAlign: 'center' }}>
                        <label>User ID:</label>
                        <input
                            type="text"
                            placeholder="Enter User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        />
                        <label>Notice:</label>
                        <textarea
                            placeholder="Type your notice"
                            value={notice}
                            onChange={(e) => setNotice(e.target.value)}
                            rows={15}
                            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        ></textarea>
                        <button onClick={handlePostNotice} style={{ marginRight: '5px', marginBottom: "10px" }}>Post Notice</button>
                        <button onClick={handleClearNotice}>Clear</button>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='right' style={{
                width: '850px', borderLeft: '1px solid #ccc', padding: '20px', boxSizing: 'border-box',
                backgroundImage: `url("https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")`
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Notices:</h2>
                {notices.map((n, index) => (
                    <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' }}>
                        <strong>{n.userId}:</strong> {n.notice}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inbox;
