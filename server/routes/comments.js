import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} from "../controllers/comment.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();

// add comments
router.post("/", verifyToken, addComment);
// update comments
router.put("/:id", verifyToken, updateComment);
// delete comments
router.delete("/:id", verifyToken, deleteComment);
// get(read) comments
router.get("/:videoId", getComments);

export default router;
