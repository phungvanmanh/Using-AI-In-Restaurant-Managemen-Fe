const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Cho phép tất cả các nguồn gốc, thay thế "*" bằng địa chỉ cụ thể của client để tăng cường bảo mật
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("A user connected");

    // Khi nhận được sự kiện 'updateEvent' từ client
    socket.on("actionPerformed", () => {
        // Gửi sự kiện 'updateData' tới tất cả clients
        io.emit("updateData");
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Listening on *:3000");
});
