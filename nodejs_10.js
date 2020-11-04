const express = require("express");
const server = express();


// server.use((req, res, next)=>{
//     console.log("hi! I'm client")
//     req.user = {
//         id : "1234",   
//     };
//     next(); //아이디 설정 후 다음 코드로 넘겨줌 
// });

// 특정한 메소드를 요청하는 것이 아니라, 모든 request는 지나쳐야하는 부분
// 아무 일이 일어나지 않고 있지만, terminal 에 해당 문장이 뜸
// 다음 요청이 실행되기 위해서는 next 붙여줘야함
// 서버를 마지막 단계에서 처리하기 전에 추가적으로 해야하는 작업
// 자주 사용됨
// server.use > get > server.use (404.html)

//css 연결
server.use(express.static(__dirname+"/public"))
// 모든 파일의 source 는 public 에-> index.css를 넣기


server.get("/", (req,res)=>{
    // __dirname // 현재 파일이 실행되는 경로
    // __filename // 현재 쓰고 있는 파일명 nodejs_9.js
    console.log(req.user); 
    res.sendFile(__dirname+"/index.html"); // index.html 을 보낼 수 있게 됨
});

server.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
});

server.use((req,res) => {
    res.sendFile(__dirname + "/404.html");
}); 

// 이상한 url로 들어왔을 시에 미들웨어를 사용해 404 설정


server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});

