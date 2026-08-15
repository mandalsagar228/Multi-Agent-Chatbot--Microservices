import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();
const app = express();

const port = process.env.PORT;

console.log("fronted url:", process.env.FRONTEND_URL);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", proxy(process.env.AUTH_SERVICES_URL));

app.get("/health", (_, res) => {
  res.status(200).json({
    status: "ok",
    service: "api-gateway",
  });
});

app.listen(port, () => {
  console.log(`Gateway is listening on port ${port} successfully.`);
});
