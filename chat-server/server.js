import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import initializeSocket from "./socket.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Chat server is running!"

    });
});


const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

initializeSocket(server);

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
