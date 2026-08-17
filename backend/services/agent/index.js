import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { router } from "./graph/router.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Agent  services is running succesfully on port ${port}`);
  connectDB();
});
