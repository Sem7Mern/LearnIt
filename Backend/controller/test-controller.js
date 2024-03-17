import StudentDomain from "../model/StudentDomain.js";
import Quiz from "../model/test.js";

export const addTest = async (req, res) => {
  try {
    const { test } = req.body;
    console.log(req.body.content);

    const newTest = new Quiz({
      quiztype: req.body.questions.quiztype,
      title: req.body.questions.title,
      content: req.body.questions.content,
      questions: req.body.questions.questions,
    });
    await newTest.save();
   let a =  await StudentDomain.updateMany({}, { $unset: { CMarks: 1,DMarks:1 } }
    );
    console.log(a);
    res.status(201).json({ message: "Notice added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getTest = async (req, res) => {
  try {
    const subject = req.params.subject;
    let test;
    let subjecttest;
    switch (subject) {
      case "social1":
        test = await Quiz.find(
          { quiztype: "currentQuiz", title: "social1" },
          { sort: { _id: -1 } }
        );
        console.log(test[test.length-1]);
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "science1":
        test = await Quiz.find(
          { quiztype: "currentQuiz", title: "science1" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "maths1":
        test = await Quiz.find(
          { quiztype: "currentQuiz", title: "maths1" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "social2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "social2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "science2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "science2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "maths2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "maths2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;

      default:
        res.status(404).json({ message: "invalid subject" });
        break;
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
