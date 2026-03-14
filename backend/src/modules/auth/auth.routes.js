import express from "express";
import { register, login } from "./auth.controller.js";

const router = express.Router();

router.post("/register", register); 
router.post("/login", login); //http://localhost:6000/api/auth/login/

export default router;