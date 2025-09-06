// --- Imports ---
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Configuration = require("./models/configurationModel");

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// ADDED: Simple request logger middleware for debugging
// app.use((req, res, next) => {
//   console.log(
//     `📥 [${new Date().toISOString()}] Received ${req.method} request for ${
//       req.originalUrl
//     }`
//   );
//   next();
// });

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ FATAL ERROR: MONGO_URI is not defined in the .env file.");
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/**
 * @route   GET /api/configurations/:id
 * @desc    Fetch a configuration's 2-D array by its ID
 * @access  Public
 */
app.get("/api/configurations/:id", async (req, res) => {
  try {
    const config = await Configuration.findById(req.params.id);
    if (!config) {
      return res.status(404).json({ message: "Configuration not found" });
    }
    res.json(config.data);
  } catch (error) {
    console.error("Error fetching configuration:", error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * @route   PUT /api/configurations/:id
 * @desc    Update the remark for a specific configuration
 * @access  Public
 */
app.put("/api/configurations/:id", async (req, res) => {
  try {
    const { remark } = req.body;

    if (!remark || typeof remark !== "string" || remark.trim() === "") {
      return res
        .status(400)
        .json({ message: "A valid remark string is required." });
    }

    const updatedConfig = await Configuration.findByIdAndUpdate(
      req.params.id,
      { remark },
      { new: true, runValidators: true }
    );

    if (!updatedConfig) {
      return res.status(404).json({ message: "Configuration not found" });
    }

    // As per the assignment, we send a success message.
    // In many real-world APIs, you might return the updated object instead:
    // res.json(updatedConfig);
    res.json({ message: "success" });
  } catch (error) {
    console.error("Error updating configuration:", error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

app.use((req, res, next) => {
  res.status(404).json({
    message: `Not Found - No route matches the path ${req.originalUrl}`,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
