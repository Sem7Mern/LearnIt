import { slogin } from "../controller/student-contoller.js";
import { slist, tlogin } from "../controller/teacher-controller.js";
import { plogin } from "../controller/parent-controller.js";
import { quiz, currentsciece } from "../controller/quiz-contoller.js";
import { studentdata,cResult ,Usubjects,Dusubjects,dResult} from "../controller/quiz-contoller.js";

import express from "express";
const route = express.Router();

// Your existing routes
route.post('/slogin', slogin);
route.post('/slist', slist);
route.post('/tlogin', tlogin);
route.post('/plogin', plogin);
route.get('/quiz', quiz);
route.get('/cscience',currentsciece)


route.post('/studentdata', studentdata);
route.put('/cResult', cResult);
route.put('/dResult', dResult);
route.post('/subjects', Usubjects);
route.post('/dsubjects', Dusubjects);

// New Notice routes
//route.post('/addNotice', addNotice);

export default route;
