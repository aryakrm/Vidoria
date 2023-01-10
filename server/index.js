import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
