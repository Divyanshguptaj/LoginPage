import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./config/database.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

database.connect();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully!",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
