//express --> http로 작동되지만 더 쓰기 쉽게 쓰는 모듈
// third package

//npm i express (익스프레스 다운로드)

const express = require("express");
const server = express();

server.get("/", (req,res)=>{
    res.send("<h1>Hello from nodejs</h1>")
})

// get -- 기본적
// post -- facebook에서 id, passwd 존재하는 아이디인지(데이터 확인)
// delete --> 유저 삭제 등
// put --> update

server.listen(3000,(err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});