// nodemon 사용해 쉽게 코드 변경
// npm install nodemon --save-dev
// package.json에서 바꿔줌
// "scripts": {
//     "dev": "nodemon nodejs_11.js"
//   },

//npm run dev 로 서버 실행
// 코드 바꿀때마다 자동으로 업데이트
//npm install express-handlebars 

const express = require("express");
const server = express();
const hbs = require("express-handlebars");

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


server.engine("hbs", hbs({
    extname: "hbs", //extension 이름
    defaultLayout:"layout.hbs", // 기본 레이아웃
    partialsDir : "partials", // 부분적인 html 파일넣는 폴더
})); // handlebars를 사용한다는 의미 --> html처럼 생겼지만 html을 nodejs에서 바꿀 수 있는
// handlebars는 views 폴더에 들어감

server.get("/")

server.set("view engine", "hbs"); 
//css 연결

server.use(express.static(__dirname+"/public"));
// 모든 파일의 source 는 public 에-> index.css를 넣기

server.get("/",(req,res)=>{
    // 요청이 들어왔을 시에 템플릿을 이제 사용할 것이므로 
    res.render("home", {
        message:"Hello from node.js", // home.hbs에는 {{message}}
    }); //home.hbs 렌더링
})

server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});