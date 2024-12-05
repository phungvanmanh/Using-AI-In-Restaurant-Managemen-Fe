const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// Đảm bảo gọi cors() để nó có thể thực thi
app.use(cors()); // Cấu hình CORS cho tất cả các route

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Cho phép tất cả các nguồn gốc, có thể thay "*" bằng một địa chỉ cụ thể để bảo mật hơn
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
