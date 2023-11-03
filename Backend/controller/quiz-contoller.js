import User from "../model/user.js";

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
