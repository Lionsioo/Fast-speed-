import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import deviceRoutes from "./routes/deviceRoutes.js";
import trackerRoutes from "./routes/trackerRoutes.js";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN,
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Routes
app.use("/devices", deviceRoutes);
app.use("/tracker", trackerRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected successfully");
}).catch((error) => {
  console.error("❌ MongoDB connection failed:", error);
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("🔌 A user connected");

  socket.on("disconnect", () => {
    console.log("❌ A user disconnected");
  });
});

// ✅ Port binding 
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
        
