import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

const app = express();

app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api", rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
}));

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SRIPADA RESORTS API is running",
  });
});

export default app;