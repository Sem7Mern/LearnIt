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
        console.log(user.AverageMarks);
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

        const { email, cResult } = req.body;
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({ email });
        console.log("cresult is " + cResult.maths);







        const filter = { email: email };
        /* Set the upsert option to insert a document if no documents match
        the filter */
        const options = { upsert: false };
        // Specify the update to set a value for the plot field
        if (cResult.science) {
            var updateDoc = {
                $set: {
                    "CMarks.science": cResult.science
                },
            };
        }

        if (cResult.maths) {
            var updateDoc = {
                $set: {
                    "CMarks.maths": cResult.maths
                },
            };
        }
        if (cResult.hindi) {
            var updateDoc = {
                $set: {
                    "CMarks.hindi": cResult.hindi
                },
            };
        }
        if (cResult.english) {
            var updateDoc = {
                $set: {
                    "CMarks.english": cResult.english
                },
            };
        }

        if (cResult.social) {
            var updateDoc = {
                $set: {
                    "CMarks.social": cResult.social
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

            return res.status(200).json({ message: "User validated successfully", subjects });
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
