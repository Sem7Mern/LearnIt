import { login } from "../controller/user-contoller.js";
import { quiz } from "../controller/quiz-contoller.js";
import { studentdata } from "../controller/quiz-contoller.js";
import express from "express";
const route = express.Router();
route.post('/login', login);
route.get('/quiz', quiz);
route.post('/studentdata', studentdata);
export default route;