import express, { Router } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import router from "./route/chat.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));
app.use("/", router);

app.listen(port, () => {
  console.log(`Chat services is running succesfully on port ${port}`);
  connectDB();
});
