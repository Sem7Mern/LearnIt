import React from 'react';
import { useNavigate } from 'react-router-dom';

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
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGsoYPMLs9wCwwRcPiFpYev3M1_8JFEGMeiY7EzwtSA&s')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '100vh',
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
                    background: 'white',
                    textAlign: 'center',
                    border: '2px solid black',
                    borderRadius: '20px',
                }}
            >
                <h2
                    style={{
                        fontSize: '30px',
                        color: 'red',
                        fontWeight: '900',
                        marginTop: '50px',
                    }}
                >
                    Here are some important points you need to know regarding tests
                </h2>

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
                <h3 style={{ color: 'black', fontWeight: '650', marginBottom: '20px' }}>
                    All the best
                </h3>
                <button
                    style={{
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
