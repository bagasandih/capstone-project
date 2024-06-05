import Express from "express";
import { Router } from "express";
import { createUser, Register, Login, Logout, getUsers } from "../Controller/UserController.js";
import { verifyToken } from '../middleware/VerifyToken.js';


const router = Express.Router();

router.post("/createuser", createUser);
router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", verifyToken,Logout);
router.get("/user", verifyToken,getUsers);


export default router;