import { createError } from "../error";
import User from "../models/User.js";
import Video from "../models/Video.js";
import Comment from "../models/Comment.js";

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const video = await Video.findById(res.video.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been deleted");
    } else {
      return next(createError(404, "You can only your own comments"));
    }
  } catch (err) {
    next(err);
  }
};
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.video.id });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
