const express=require('express');
const app=express();
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
      cors: {
    origin: "*",
  }
 });

io.on("connection", (socket) => {
  console.log(socket);
  socket.on("chat",(payload)=>{
    console.log(payload);
    io.emit("chat",payload);
  })
});

httpServer.listen(5000,()=>{
    console.log("server is started");
});
 