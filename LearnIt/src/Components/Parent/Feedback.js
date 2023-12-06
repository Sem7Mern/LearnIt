import React, { useState } from "react";
import './Feedback.css';


const Feedback = () => {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [progressSatisfaction, setProgressSatisfaction] = useState(0);
  const [teacherSatisfaction, setTeacherSatisfaction] = useState(0);
  const [securitySatisfaction, setSecuritySatisfaction] = useState(0);
  const [pricingSatisfaction, setPricingSatisfaction] = useState(0);
  const [review, setReview] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the feedback data to an API or database here

    // Clear the form fields
    setParentName("");
    setEmail("");
    setPhone("");
    setChildName("");
    setProgressSatisfaction(0);
    setTeacherSatisfaction(0);
    setSecuritySatisfaction(0);
    setPricingSatisfaction(0);
    setReview("");
    setRecommendation("");
  };

  
        
  return (
    <div className="feedback">
        <h1>Parent Feedback Form</h1>
        <form onSubmit={handleSubmit}>
            {/* ... (other form fields are unchanged and intact) */}
            
            <div className="field">
                <label htmlFor="securitySatisfaction">
                How do you feel about your child's progress?


                </label>
                <select
                    id="securitySatisfaction"
                    name="securitySatisfaction"
                    value={securitySatisfaction}
                    onChange={(event) =>
                        setSecuritySatisfaction(event.target.value)
                    }
                >
                    <option value="0">Very Unsatisfied</option>
                    <option value="1">Unsatisfied</option>
                    <option value="2">Neutral</option>
                    <option value="3">Satisfied</option>
                    <option value="4">Very Satisfied</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="pricingSatisfaction">
                How satisfied are you with our teachers and the online learning platform?

                </label>
                <select
                    id="pricingSatisfaction"
                    name="pricingSatisfaction"
                    value={pricingSatisfaction}
                    onChange={(event) =>
                        setPricingSatisfaction(event.target.value)
                    }
                >
                    <option value="0">Very Unsatisfied</option>
                    <option value="1">Unsatisfied</option>
                    <option value="2">Neutral</option>
                    <option value="3">Satisfied</option>
                    <option value="4">Very Satisfied</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="review">Any additional feedback or review:</label>
                <textarea
                    id="review"
                    name="review"
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                ></textarea>
            </div>

           

            <button type="submit">Submit Feedback</button>
        </form>
    </div>
);
                  };
export  default Feedback;