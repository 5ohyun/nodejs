const express = require("express");
const server = express();

server.get("/", (req,res)=>{
    // __dirname // 현재 파일이 실행되는 경로
    // __filename // 현재 쓰고 있는 파일명 nodejs_9.js
    res.sendFile(__dirname+"/index.html"); // index.html 을 보낼 수 있게 됨
});

server.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
});

server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
})

