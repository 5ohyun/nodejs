// 서버 만들기, 서버로부터 응답 보내고 받기
// request, response

const http = require("http"); //서버 만드는 http 모듈 (별로 안 씀 -> express)
const server = http.createServer((req,res)=> {
    console.log(req.url);
    // 어떻게 request url이 들어오는지 보기
    // url을 실행하면 /만 뜸
    if(req.url === "/") {
        res.write("<h1>Hello from nodejs</h1>"); // /경로에 html 문장 넣기
    }
    else { // 잘못된 url 들어오면 
        res.write(`<h1>you have entered this url ${req.url}</h1>`);
    }
    res.end(); // 다 쓰면 response 끝내기
    // localhost :3000/abc 라고 하면 console에 /abc가 뜸
});

server.listen(3000,()=>{
    console.log("the server is listening on port 3000");
}) // 포트번호
