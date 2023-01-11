import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

// Sign Up

router.post("/signup", signup);

// Sign in

router.post("/signin", signin);

// Google Authentication
router.post("/google");

export default router;
