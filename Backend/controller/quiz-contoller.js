import User from "../model/user.js";
import StudentDomain from "../model/StudentDomain.js";
export const quiz = async (req, res) => {
    try {


        // Validate if the email and password exist in your MongoDB database
        const user = await User.find({ email, password });
        console.log(user);
        if (user) {
            // User exists in the database
            return res.status(200).json({ message: "User validated successfully", success: true });
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
export const studentdata = async (req, res) => {
    try {

        const { email } = req.body;
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({ email });
        console.log(user);
        if (user) {
            // User exists in the database
            return res.status(200).json({ message: "User validated successfully", user });
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};


export const cResult = async (req, res) => {
    try {

        const { email , cResult} = req.body;
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({ email });
        console.log("cresult is "+ user);







        const filter = { email:email };
        /* Set the upsert option to insert a document if no documents match
        the filter */
        const options = { upsert: false };
        // Specify the update to set a value for the plot field
        if (cResult.science !== undefined) {
              var updateDoc = {
          $set: {
            "CMarks.science" : cResult.science
          },
        };
        }
        
            if (cResult.maths !== undefined) {
                console.log("inside maths");
                var updateDoc = {
                    $set: {
                      "CMarks.maths" : cResult.maths
                    },
                  };
            }
            if (cResult.hindi !== undefined) {
                console.log("inside hindi");
                var updateDoc = {
                    $set: {
                      "CMarks.hindi" : cResult.hindi
                    },
                  };
            }
            if (cResult.english !== undefined) {
                console.log("inside english");
                var updateDoc = {
                    $set: {
                      "CMarks.english" : cResult.english
                    },
                  };
            }

            if (cResult.social !== undefined) {
                var updateDoc = {
                    $set: {
                      "CMarks.social" : cResult.social
                    },
                  };
            }
        
      
        // Update the first document that matches the filter
        
        

        
        
        
        
        
        
        
        
        if (user) {
            // mark = await StudentDomain.findByIdAndUpdate(user._id, { $set: {"CMarks.science":cResult.science}})
            // User exists in the database
            
            const mark = await StudentDomain.findOneAndUpdate(filter, updateDoc, options);
            
            return res.status(200).json({ message: "Updated successfully", mark });
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Update Unsuccessful" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};


export const dResult = async (req, res) => {
    try {

        const { email , dResult} = req.body;
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({ email });
        console.log("cresult is "+ dResult.maths);







        const filter = { email:email };
        /* Set the upsert option to insert a document if no documents match
        the filter */
        const options = { upsert: false };
        // Specify the update to set a value for the plot field
        if (dResult.science !== undefined) {
              var updateDoc = {
          $set: {
            "DMarks.science" : dResult.science
          },
        };
        }
        
            if (dResult.maths !== undefined) {
                var updateDoc = {
                    $set: {
                      "DMarks.maths" : dResult.maths
                    },
                  };
            }
            if (dResult.hindi !== undefined) {
                var updateDoc = {
                    $set: {
                      "DMarks.hindi" : dResult.hindi
                    },
                  };
            }
            if (dResult.english !== undefined) {
                var updateDoc = {
                    $set: {
                      "DMarks.english" : dResult.english
                    },
                  };
            }

            if (dResult.social !== undefined) {
                var updateDoc = {
                    $set: {
                      "DMarks.social" : dResult.social
                    },
                  };
            }
        
      
        // Update the first document that matches the filter
        
        

        
        
        
        
        
        
        
        
        if (user) {
            // mark = await StudentDomain.findByIdAndUpdate(user._id, { $set: {"CMarks.science":cResult.science}})
            // User exists in the database
            
            const mark = await StudentDomain.findOneAndUpdate(filter, updateDoc, options);
            
            return res.status(200).json({ message: "Updated successfully", mark });
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Update Unsuccessful" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};


export const Usubjects = async (req, res) => {
    try {

        const { email } = req.body;
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({ email });
   
        if (user) {
            // User exists in the database
            let subjects = user[0].CMarks;
          console.log("subjects of Usubjects");
          console.log(subjects);
            return res.status(200).json({ message: "User validated successfully", subjects});
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};



export const Dusubjects = async (req, res) => {
    try {

        const { email } = req.body;
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({ email });
   
        if (user) {
            // User exists in the database
            console.log(user);
            let subjects = user[0].DMarks;
            console.log("dynamic subjects are");
          console.log(subjects);
            return res.status(200).json({ message: "User validated successfully", subjects});
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
