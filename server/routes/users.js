import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";

const router = express.Router();

//Update a user

router.put("/:id", verifyToken, update);

// Delete a user
router.delete("/:id", verifyToken, deleteUser);

//Get a user
router.get("/find/:id", verifyToken, getUser);

// Subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

// Unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

// Like a video
router.put("/like/:videoId", verifyToken, like);

// Dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
