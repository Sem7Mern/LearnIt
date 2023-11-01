import { addUser } from "../controller/user-contoller.js";
import  express  from "express";
const route = express.Router();
route.post('/add',addUser);
export default route;