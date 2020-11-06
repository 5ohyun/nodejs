
/////////////////// npm run dev 시에 실행될 파일 설정 - package.json에서 필요

const express = require("express");
const hbs = require("express-handlebars");
const bodyParser=require("body-parser");
const server = express();
// const words = require("./db/words.json") // db 연결
let words = require("./db/words.json") // db 연결
//let으로 변경해 db인 words를 바꾸겠다


server.engine("hbs", hbs({
    extname: "hbs", //extension 이름
    defaultLayout:"layout_16.hbs", // 기본 레이아웃
    partialsDir : "partials", // 부분적인 html 파일넣는 폴더
})); // handlebars를 사용한다는 의미 --> html처럼 생겼지만 html을 nodejs에서 바꿀 수 있는
// handlebars는 views 폴더에 들어감

server.set("view engine", "hbs");  //css 연결
server.use(express.static(__dirname+"/public"));
// 모든 파일의 source 는 public 에-> index.css를 넣기
server.use(bodyParser.urlencoded({extended:false})); 
// body 를 읽을 수 있음, terminal에 search창에 입력한 query 보임 { query: '하이' }

server.get("/",(req,res)=>{ //home.hbs 렌더링
    // 요청이 들어왔을 시에 템플릿을 이제 사용할 것이므로 
    res.render("home_16",{
        // words:words,
        words, // 같은 이름을 보낼 때는 하나만 써도 됨
    }); 
})

server.post("/",(req,res)=>{
    console.log(req.body); 
    // body를 불러왔으나 parse가 되어있지않아 미들웨어에서 bodyparser 해줘야 함

    const {query} = req.body; //{ query: '하이' }

    res.render("home_16",{ 
        words:words.filter(w=>w.word.toLowerCase().includes(query.toLowerCase())) // render 해 줄 페이지
    })
});

server.delete("/",(req,res)=>{
    // console.log(req.body);
    // X를 누르면 console에 { word: 'Eat' }  찍힘
    let {word} = req.body;
    words = words.filter((w)=> !(w.word === word)); // 같지 않을 경우 빼버린다!
});

server.get("/add", (req, res)=> {
    res.render("add");
});

server.get("/quiz", (req, res)=> {
    res.render("quiz");
});

server.use((req,res)=> { // 에러났을시 연결할 hbs
    res.render("404");
});

server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});