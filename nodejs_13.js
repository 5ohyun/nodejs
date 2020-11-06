// bootstrap, semantic-ui 
// class 입력, 바로 디자인 템플릿 사용 가능 btn (bootstrap)
// 다양한 색, 다양한 버튼 등 기능 다양함 (semantic-ui)

// handlebars 사용, static 파일, url, layout
// semantic-ui.com에서 파일 다운
// semantic.min.css / semantic.min.js  static/sematic 폴더에 넣어주기
// layouts.hbs 에서 css 연결


/////////////////// npm run dev 시에 실행될 파일 설정 - package.json에서 필요

const express = require("express");
const server = express();
const hbs = require("express-handlebars");


server.engine("hbs", hbs({
    extname: "hbs", //extension 이름
    defaultLayout:"layout_13.hbs", // 기본 레이아웃
    partialsDir : "partials", // 부분적인 html 파일넣는 폴더
})); // handlebars를 사용한다는 의미 --> html처럼 생겼지만 html을 nodejs에서 바꿀 수 있는
// handlebars는 views 폴더에 들어감

server.get("/")
server.set("view engine", "hbs"); 
//css 연결

server.use(express.static(__dirname+"/public"));
// 모든 파일의 source 는 public 에-> index.css를 넣기

server.get("/",(req,res)=>{ //home.hbs 렌더링
    // 요청이 들어왔을 시에 템플릿을 이제 사용할 것이므로 
    res.render("home_13"); 
})

server.get("/add", (req, res)=> {
    res.render("add");
})

server.get("/quiz", (req, res)=> {
    res.render("quiz");
})

server.use((req,res)=> { // 에러났을시 연결할 hbs
    res.render("404");
})

server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});