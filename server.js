const express = require("express");
const app = express();
const { Server } = require("socket.io");
const server = app.listen(8000);

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("click", (lastPlay) => {
    console.log(lastPlay);
    socket.broadcast.emit("click", lastPlay);
  });
});

console.log("listening on port 8000:");
