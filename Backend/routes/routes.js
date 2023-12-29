import { slogin } from "../controller/student-contoller.js";
import { tlogin } from "../controller/teacher-controller.js";
import { plogin } from "../controller/parent-controller.js";
import { quiz } from "../controller/quiz-contoller.js";
import { studentdata,cResult ,Usubjects,Dusubjects,dResult} from "../controller/quiz-contoller.js";

import express from "express";
const route = express.Router();
route.post('/slogin', slogin);
route.post('/tlogin', tlogin);
route.post('/plogin', plogin);

route.get('/quiz', quiz);
route.post('/studentdata', studentdata);
route.put('/cResult', cResult);
route.put('/dResult', dResult);
route.post('/subjects', Usubjects);
route.post('/dsubjects', Dusubjects);
export default route;