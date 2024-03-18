// Import React and CSS
import React from 'react';
import './RectangleBox.css'; // Make sure to use the same CSS file

// Sample student data
const studentData = {
  name: 'John Doe',
  class: '10th Grade',
  rollNo: 'A12345',
};

const contactInfo = {
  fullName: 'Johnatan Smith',
  email: 'example@example.com',
  phone: '(097) 234-5678',
  mobile: '(098) 765-4321',
  address: 'Bay Area, San Francisco, CA',
};




// React component
const Rectanglebox = () => {

//  >>>>>>>>>>> api   fetch the data of the students  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//   const Student = mongoose.model('Student', studentSchema);

// // API endpoint to get all students
// app.get('/api/students', async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

  return (
    
      <div className="std-container">
        <div className="rectangle-box">
          <div className="image-container">
            {/* <img src="/Profilepicture.jpg"   /> */}
          </div>
          <div className="info-container">
            <p>{`Name: ${studentData.name}`}</p>
            <p>{`Class: ${studentData.class}`}</p>
            <p>{`Roll No: ${studentData.rollNo}`}</p>
          </div>
        </div>
        <div className="rectangle-horizontal">
          <div className="info-container">
            <p>{`Full Name: ${contactInfo.fullName}`}</p>
            <p>{`Email: ${contactInfo.email}`}</p>
            <p>{`Phone: ${contactInfo.phone}`}</p>
            <p>{`Mobile: ${contactInfo.mobile}`}</p>
            <p>{`Address: ${contactInfo.address}`}</p>
          </div>
        </div>
        <div>
          <performance/>
        </div>
      </div>
 





        

    
  );
};

export default Rectanglebox;
