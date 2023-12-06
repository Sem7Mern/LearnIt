import User from "../model/user.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate if the email and password exist in your MongoDB database
        const user = await User.findOne({ email, password });
        console.log(user);
        if (user) {
            // User exists in the database
<<<<<<< HEAD
            return res.status(200).json({ message: "User validated successfully", success: true ,email: email});
=======
            return res.status(200).json({ message: "User validated successfully", success: true });
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
