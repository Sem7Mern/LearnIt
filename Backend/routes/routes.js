import { slogin } from "../controller/student-contoller.js";
import { slist, tlogin } from "../controller/teacher-controller.js";
import { plogin } from "../controller/parent-controller.js";
import { quiz } from "../controller/quiz-contoller.js";
import { studentdata,cResult ,Usubjects,Dusubjects,dResult} from "../controller/quiz-contoller.js";
import { addNotice, getnotices } from "../controller/notice-controller.js";

import express from "express";
import { addTest, getTest } from "../controller/test-controller.js";
const route = express.Router();

// Your existing routes
route.post('/slogin', slogin);
route.post('/slist', slist);
route.post('/tlogin', tlogin);
route.post('/plogin', plogin);
route.get('/quiz', quiz);
route.get('/cscience')


route.post('/studentdata', studentdata);
route.put('/cResult', cResult);
route.put('/dResult', dResult);
route.post('/subjects', Usubjects);
route.post('/dsubjects', Dusubjects);

// New Notice routes
route.post('/addNotice', addNotice);
route.get('/getnotices', getnotices);




route.post('/tests',addTest)
route.get('/getquiz/:subject',getTest)






export default route;
