const express = require('express');
const app = express();

const http = require('http');


//this is compination of express + http

const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const PORT = 8888; 

app.use(express.static('public')); // pure express to server my frontend from pure express app
server.listen(PORT);


io.on('connection', (socket) => {
    // console.log(socket.id);
    socket.on("secret message",(data)=>{
    //   console.log(data);
      io.emit("secret message",data);
    })
})