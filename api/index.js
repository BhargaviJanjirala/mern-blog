import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import commonRoutes from "./routes/comment.route.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3008, () => {
  console.log("Server is running on port 3008");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commonRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
