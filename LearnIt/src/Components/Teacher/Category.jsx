// App.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import './Category.css';

const Category = () => {
    const [students, setStudents] = useState([]);

    const categorizeStudents = (uploadedData) => {
        const categorizedStudents = uploadedData.map((student) => {
            const marks = student[1]; // Assuming marks are in the second column (adjust accordingly)

            let category;
            if (marks < 45) {
                category = 'Slow Learner';
            } else if (marks >= 45 && marks <= 75) {
                category = 'Average Learner';
            } else {
                category = 'Advanced Learner';
            }

            return { name: student[0], marks, category };
        });

        setStudents(categorizedStudents);
    };

    return (
        <div>
            <h1>Categorizes your student</h1>
            <FileUpload onFileUpload={categorizeStudents} />
            {students.length > 0 && (
                <div>
                    <h2>Categorized Students:</h2>
                    <ul>
                        {students.map((student) => (
                            <li key={student.name}>
                                {`${student.name} - Marks: ${student.marks}, Category: ${student.category}`}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Category;
