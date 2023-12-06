<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import "./student_list.css";

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     // Fetch the student data from the API endpoint
//     fetch("http://localhost:8000/studentdata")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch student data.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setStudents(data);
//       })
//       .catch((error) => console.error("Error fetching student data:", error));
//   }, []);

//   const renderStudentList = () => {
//     return (
//       <table className="student-list">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>School_id</th>
//             <th>Email</th>
//             <th>Class</th>
//             <th>AverageMarks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.school_id}>
//               <td>{student.name}</td>
//               <td>{student.school_id}</td>
//               <td>{student.email}</td>
//               <td>{student.class}</td>
//               <td>{student.AverageMarks}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="student-list-page">
//       <h1>Student List</h1>
//       {students.length > 0 ? renderStudentList() : <p>No students found.</p>}
//     </div>
//   );
// };

// export default StudentList;


=======
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
import React, { useState, useEffect } from "react";
import "./student_list.css";

const StudentList = () => {
<<<<<<< HEAD
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student data from the API endpoint
    fetch("http://localhost:8000/studentdata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch student data.");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);
=======
  const [students] = useState([
    {
      name: "John Doe",
      school_id: "19CS101",
      branch: "Computer Science",
      section: "A",
      cgpa: 9.5,
    },
    {
      name: "Jane Doe",
      school_id: "19CS102",
      branch: "Computer Science",
      section: "B",
      cgpa: 9.0,
    },
    {
      name: "Peter Parker",
      school_id: "19CS103",
      branch: "Computer Science",
      section: "C",
      cgpa: 8.5,
    },
  ]);

  useEffect(() => {
    // Fetch the student data from an API or database here
    // and set the students state variable
  }, []);
  // useEffect(() => {
  //   fetch("https;//localhost:8000/adduser") // replace with your actual API endpoint
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch student data.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setStudents(data);  // Assuming your backend sends the data as an array
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019

  const renderStudentList = () => {
    return (
      <table className="student-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>School_id</th>
<<<<<<< HEAD
            <th>Email</th>
            <th>Class</th>
            <th>AverageMarks</th>
=======
            <th>Branch</th>
            <th>Section</th>
            <th>CGPA</th>
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.school_id}>
              <td>{student.name}</td>
              <td>{student.school_id}</td>
<<<<<<< HEAD
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>{student.AverageMarks}</td>
=======
              <td>{student.branch}</td>
              <td>{student.section}</td>
              <td>{student.cgpa}</td>
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="student-list-page">
      <h1>Student List</h1>
      {students.length > 0 ? renderStudentList() : <p>No students found.</p>}
    </div>
  );
};

export default StudentList;
