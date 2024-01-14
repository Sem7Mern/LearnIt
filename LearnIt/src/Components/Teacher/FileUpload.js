// FileUpload.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

const FileUpload = ({ onFileUpload }) => {
    const [uploadedData, setUploadedData] = useState([]);
    const [categorizedData, setCategorizedData] = useState([]);

    const onDrop = (acceptedFiles) => {
        // Assuming only one file is uploaded
        const file = acceptedFiles[0];

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            // Parse Excel data using xlsx library
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Find the column indices for "Name" and "Marks"
            const nameIndex = jsonData[0].findIndex(
                (header) => header.toLowerCase() === 'name'
            );
            const marksIndex = jsonData[0].findIndex(
                (header) => header.toLowerCase() === 'marks'
            );

            setUploadedData(jsonData);
            onFileUpload(jsonData);

            // Extract "Name" and "Marks" columns
            const extractedData = jsonData.slice(1).map((row) => ({
                name: row[nameIndex] || 'Name Not Available',
                marks:
                    marksIndex !== -1 && !isNaN(parseFloat(row[marksIndex]))
                        ? parseFloat(row[marksIndex])
                        : null,
            }));

            // Categorize data
            const categorizedData = extractedData.map((student) => {
                const marks = student.marks;
                let category;
                if (marks !== null) {
                    if (marks < 45) {
                        category = 'Slow Learner';
                    } else if (marks >= 45 && marks <= 75) {
                        category = 'Average Learner';
                    } else {
                        category = 'Advanced Learner';
                    }
                } else {
                    category = 'Category Not Available';
                }

                return {
                    name: student.name,
                    marks,
                    category,
                };
            });

            setCategorizedData(categorizedData);
        };

        reader.readAsBinaryString(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <div className='upper'>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an Excel file here, or click to select one</p>
                </div>
            </div>
            <div className='lower'>
                {uploadedData.length > 0 && (
                    <div>
                        <h3>Original Excel Data:</h3>
                        <table border="1">
                            <thead>
                                <tr>
                                    {uploadedData[0].map((cell, index) => (
                                        <th key={index}>{cell}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {uploadedData.slice(1).map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {categorizedData.length > 0 && (
                    <div>
                        <h3>Categorized Data:</h3>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Marks</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categorizedData.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.marks !== null ? student.marks : 'N/A'}</td>
                                        <td>{student.category}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        </div>
    );
};

export default FileUpload;
