import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  getByTags,
  search,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Create Video
router.post("/", verifyToken, addVideo);
// update video
router.put("/:id", verifyToken, updateVideo);
// delete video
router.delete("/:id", verifyToken, deleteVideo);
// get(read) video
router.get("/find/:id", getVideo);
// update views
router.put("/view/:id", addView);
// get(read) trend videos
router.get("/trend", trend);
// get(read) random videos
router.get("/random", random);
// get(read) subscribed channels' videos
router.get("/sub", verifyToken, sub);
// get(read) videos by tags
router.get("/tags", getByTags);
// get(read) videos by title
router.get("/search", search);

export default router;
