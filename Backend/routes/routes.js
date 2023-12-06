import { login } from "../controller/user-contoller.js";
import { quiz } from "../controller/quiz-contoller.js";
<<<<<<< HEAD
import { studentdata } from "../controller/quiz-contoller.js";
=======
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
import express from "express";
const route = express.Router();
route.post('/login', login);
route.get('/quiz', quiz);
<<<<<<< HEAD
route.post('/studentdata', studentdata);

=======
>>>>>>> 31e1b321e0ffc62a7504815928a7902780c6c019
export default route;