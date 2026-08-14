import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.route.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const port = process.env.PORT;
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   }),
// );
// app.use(cookieParser());
app.use(express.json());
app.use("/", router);
app.listen(port, () => {
  console.log(`Auth services is running succesfully on port ${port}`);
  connectDB();
});
