import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
console.log("fronted url:", process.env.FRONTEND_URL);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/auth", proxy(process.env.AUTH_SERVICES));

// app.use("/", (_, res) => {
//   res.json({ message: "Server from Gateway." });
// });

app.listen(port, () => {
  console.log(`Gateway is listening on port ${port} successfully.`);
});
