import React from 'react';
import { useNavigate } from 'react-router-dom';
import './instructions.css';

function Instruction() {
    const navigate = useNavigate();

    function GiveCurrent(params) {
        navigate('/TestScreen');
    }

    return (
        <div
            className="test"
            style={{
                backgroundImage:
                    "url('https://e0.pxfuel.com/wallpapers/412/514/desktop-wallpaper-notice-board-vintage-frame-background-powerpoint-power-point-old-powerpoint.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '120vh',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                className="dynamic"
                style={{
                    width: '60%',
                    height: '500px',
                    background: 'lightblue',
                    textAlign: 'center',
                    borderRadius: '20px',
                }}
            >
                <h3
                    style={{
                        fontSize: '20px',
                        color: 'black',
                        fontWeight: '800',
                        marginTop: '50px',
                        marginBottom: "30px"
                    }}
                >
                    Here are some important points you need to know regarding tests
                </h3>

                <div style={{ fontWeight: '500', justifyContent: 'center' }}>
                    <ol className="instructions" style={{ marginLeft: '100px' }}>
                        <li>
                            we are taking two tests to check your performance which are
                            current syllabus test & dynamic content test
                        </li>
                        <li>
                            there are respected subtest for each test according to your
                            school subject
                        </li>
                        <li>
                            current syllabus test is on syllabus taught in your school
                        </li>
                        <li>
                            In dynamic content test, we are providing you content and
                            questions are regarding that content
                        </li>
                        <li>
                            you can give both test one after another immediately or can
                            take a break after the first test
                        </li>
                        <li>
                            you have to give the 2nd test within 3 days after giving the
                            first test
                        </li>
                    </ol>
                </div>
                <h3 style={{ color: 'red', fontWeight: '650', marginBottom: '20px', marginTop: "30px" }}>
                    All the best
                </h3>
                <button
                    style={{
                        width: "200px",
                        marginLeft: "330px",
                        background: 'green',
                        ':hover': { background: 'red' }, // Add hover effect
                    }}
                    onClick={GiveCurrent}
                    className="btn btn-primary"
                >
                    Start your first test
                </button>
            </div>
        </div>
    );
}

export default Instruction;
