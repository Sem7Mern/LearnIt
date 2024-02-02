import Quiz from "../model/test.js";

export const addTest = async (req, res) => {
    try {
        const {test } = req.body;console.log(req.body.content);

        const newTest = new Quiz({quiztype: req.body.questions.quiztype,  title:  req.body.questions.title ,content: req.body.questions.content, questions:  req.body.questions.questions });
        await newTest.save();

        res.status(201).json({ message: 'Notice added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
