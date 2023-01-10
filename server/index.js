import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT;
const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      throw new Error(err);
    });
};

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
  connect();
});
