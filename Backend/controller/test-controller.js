import Quiz from "../model/test.js";

export const addTest = async (req, res) => {
    try {
        const {test } = req.body;

        const newTest = new Quiz({  title:  req.body.title , questions:  req.body.questions });
        await newTest.save();

        res.status(201).json({ message: 'Notice added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
